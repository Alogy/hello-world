<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function index () {
        $arr = [
            'error' => '',
            'result' => [
                'info' => 'Hello World'
            ]
        ];
        return response()->json($arr);
    }
}
