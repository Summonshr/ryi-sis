<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AccessViewRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        if ($this->route()->getName() === 'roles-and-permissions.edit') {
            return auth()->user()->can('edit-roles_and_permissions');
        }

        return auth()->user()->can('read-roles_and_permissions');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            //
        ];
    }
}
