import React from "react";
import {useRegistration} from "../hooks/useRegistration.js"

const RegistrationForm = () => {
    const { form, onSubmit, message, loading, handleExcelDownload } = useRegistration();
    const { register, handleSubmit, formState: { errors } } = form;
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center">📝 Registration Form</h1>

            {message && <div className="mb-4 text-center text-sm">{message}</div>}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <input type="text" placeholder="First Name" {...register("first_name")} className="w-full p-2 border rounded" />
                    {errors.first_name && <p className="text-red-500 text-sm">{errors.first_name.message}</p>}
                </div>

                <div>
                    <input type="text" placeholder="Last Name" {...register("last_name")} className="w-full p-2 border rounded" />
                    {errors.last_name && <p className="text-red-500 text-sm">{errors.last_name.message}</p>}
                </div>

                <div>
                    <input type="text" placeholder="Address" {...register("address")} className="w-full p-2 border rounded" />
                    {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                </div>

                <div>
                    <input type="text" placeholder="Phone Number" {...register("phone_number")} className="w-full p-2 border rounded" />
                    {errors.phone_number && <p className="text-red-500 text-sm">{errors.phone_number.message}</p>}
                </div>

                <div>
                    <input type="file" {...register("invoice")} className="w-full p-2 border rounded" />
                    {errors.invoice && <p className="text-red-500 text-sm">{errors.invoice.message}</p>}
                </div>

                <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </form>

            <button onClick={handleExcelDownload} className="mt-4 w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
                ⬇️ Download Excel
            </button>
        </div>
    );
};

export default RegistrationForm;
