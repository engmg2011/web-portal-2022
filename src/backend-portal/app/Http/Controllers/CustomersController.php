<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;

class CustomersController extends Controller
{
    public function create(Request $request)
    {

        $request->validate([
            'email' => 'required|email|unique:customers|max:255',
            'username' => 'required|max:255',
        ]);

        Customer::create($request->only(['username', 'email']));

        return response()->json(['message'=>'Created successfully']);

    }

    public function update($id, Request $request)
    {

        $request->validate([
            'email' => 'email|unique:customers,email,'.$id.'|max:255',
            'username' => 'max:255',
        ]);

        Customer::find($id)->update($request->only(['username', 'email']));

        return response()->json(['message'=>'Updated successfully']);
    }

    public function list()
    {
        return Customer::paginate(15);
    }

    public function delete($id)
    {
        $customer = Customer::find($id);
        if(!$customer)  return response()->json(['message'=>'Customer doesn\'t exist'] , 400);
        $customer->delete();
        return response()->json(['message'=>'Deleted successfully']);
    }

    public function getCustomer($id)
    {
        $customer = Customer::find($id);
        if(!$customer)  return response()->json(['message'=>'Customer doesn\'t exist'] , 400);
        return response()->json(['message'=>'success', 'data'=> $customer]);
    }
}
