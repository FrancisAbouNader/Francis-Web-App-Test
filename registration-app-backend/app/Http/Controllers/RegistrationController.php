<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRegistrationRequest;
use App\Models\Registration;
use Illuminate\Support\Facades\Storage;
class RegistrationController extends Controller
{
    //
    public function store(StoreRegistrationRequest $request)
    {
        $validated = $request->validated();
        $path = Storage::disk('invoices')->putFile('', $validated['invoice']);
        $validated['invoice_path'] = Storage::disk('invoices')->url($path);
        Registration::create($validated);
        return $this->success('Registration successful!');
    }
}
