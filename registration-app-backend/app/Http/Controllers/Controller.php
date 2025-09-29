<?php

namespace App\Http\Controllers;

abstract class Controller
{
    //
    public function success($message)
    {
        $response = [
            'message' => $message,
        ];

        return response()->json($response);
    }
}
