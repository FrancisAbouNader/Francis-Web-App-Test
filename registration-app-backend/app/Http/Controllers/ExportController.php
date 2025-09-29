<?php

namespace App\Http\Controllers;

use App\Exports\RegistrationsExport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExportController extends Controller
{
    //

    public function export()
    {
        $fileName = 'registrations.xlsx';
        return Excel::download(new RegistrationsExport(), $fileName);
    }
}
