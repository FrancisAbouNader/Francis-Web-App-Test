import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// Validation schema
const schema = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    address: Yup.string().required("Address is required"),
    phone_number: Yup.string()
        .required("Phone number is required")
        .matches(/^\d+$/, "Phone number must contain only digits"),    invoice: Yup.mixed()
        .test("fileRequired", "Invoice file is required", (value) => {
            return value && value.length > 0;
        }),
});

export const useRegistration = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const form = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        setLoading(true);
        setMessage(null);

        const formData = new FormData();
        formData.append("first_name", data.first_name);
        formData.append("last_name", data.last_name);
        formData.append("address", data.address);
        formData.append("phone_number", data.phone_number);
        formData.append("invoice", data.invoice[0]);

        try {
            await axios.post(`${API_URL}/register`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            setMessage("✅ Registration successful!");
            setTimeout(()=>{
            setMessage('')
            },1000)
            form.reset();
        } catch (error) {
            console.error(error);
            setMessage("❌ An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleExcelDownload = async () => {
        try {
            const response = await axios.get(`${API_URL}/export-excel`, {
                responseType: "blob",
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "registrations.xlsx");
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error("Excel download failed", error);
            setMessage("❌ Failed to download Excel file");
        }
    };

    return {
        form,
        onSubmit,
        message,
        loading,
        handleExcelDownload,
    };
};
