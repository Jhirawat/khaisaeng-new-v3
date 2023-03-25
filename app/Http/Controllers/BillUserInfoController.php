<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BillUserInfoController extends Controller
{
    public function index()
    {
        return view('user.billinfo');
    }

    public function cartList()
    {
        $cartItems = \Cart::getContent();
        // dd($cartItems);
        return view('user.billinfo', compact('cartItems'));
    }
}
