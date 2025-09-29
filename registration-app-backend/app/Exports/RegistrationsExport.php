<?php

namespace App\Exports;

use App\Models\Registration;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class RegistrationsExport implements FromCollection, WithHeadings
{
    // Return all rows to export
    public function collection()
    {
        return Registration::select('first_name', 'last_name', 'address', 'phone_number', 'invoice_path', 'created_at')
            ->get()
            ->map(function($item) {
                $invoiceUrl = url('storage/invoices/' . basename($item->invoice_path));
                return [
                    'first_name'   => $item->first_name,
                    'last_name'    => $item->last_name,
                    'address'      => $item->address,
                    'phone_number' => $item->phone_number,
                    'invoice_path' => '=HYPERLINK("' . $invoiceUrl . '","View Invoice")',
                    'created_at'   => $item->created_at->format('Y-m-d'),
                ];
            });
    }

    // Set custom header row
    public function headings(): array
    {
        return [
            'First Name',
            'Last Name',
            'Address',
            'Phone Number',
            'Invoice Path',
            'Created At', // Friendly header
        ];
    }
}
