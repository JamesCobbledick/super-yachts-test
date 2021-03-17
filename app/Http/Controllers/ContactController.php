<?php

namespace App\Http\Controllers;

use App\Http\Resources\ContactResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return ContactResource
     */
    public function index(Request $request)
    {
        $response = Auth::user()->contacts();

        if ($request->input('search')) {

            //If the request is requesting a search, get the relevant results
            $search = $request->input('search');

            //Search for key terms, must be nested to allow for the favourite filter
            $response = $response->where(function ($query) use ($search) {
                $query->where('name', 'like', '%' . $search . '%')
                    ->orWhere('mobile', 'like', '%' . $search . '%')
                    ->orWhere('landline', 'like', '%' . $search . '%')
                    ->orWhere('email', 'like', '%' . $search . '%');
            });

            //If results are being filtered, apply it here
            if ($request->input('filter_favourites')) {
                $response = $response->where('favourite', true);
            }

        }

        //Gather the results, pagination could be added here if needed
        $response = $response->get();

        return new ContactResource($response);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $this->validator($data)->validate();

        //Initialise the new contact
        $contact = new \App\Models\Contact($data);

        //Associate the new contact to the authenticated user
        $contact->user()->associate(Auth::user())->save();

        return response([
            'message' => 'Contact successfully created'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return ContactResource
     */
    public function show($id)
    {
        //Only display contacts the user has access to
        return new ContactResource(Auth::user()->contacts()->find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return ContactResource
     */
    public function edit($id)
    {
        //Only allow editing of contacts the user has access to
        return new ContactResource(Auth::user()->contacts()->find($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        $this->validator($data)->validate();

        //Ensure the user has access the the contact we're looking to update
        $contact = Auth::user()->contacts()->find($id);

        $contact->update($data);

        return response([
            'message' => 'Contact updated'
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function favourite(Request $request, $id)
    {
        $data = $request->all();

        //Ensure the user has access the the contact we're looking to update
        $contact = Auth::user()->contacts()->find($id);

        //Toggle the favourite state of the model
        $new_state = !$contact->favourite;
        $contact->favourite = $new_state;

        $contact->save();

        if ($new_state) {
            $message = 'Contact marked as a favourite';
        } else {
            $message = 'Contact removed from favourites';
        }

        return response([
            'message' => $message
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Auth::user()->contacts()->find($id)->delete();

        return response([
            'message' => 'Contact deleted'
        ]);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'max:255'],
            'email' => ['nullable', 'max:255'],
            'mobile' => ['nullable', 'max:255'],
            'landline' => ['nullable', 'max:255'],
        ]);
    }
}

