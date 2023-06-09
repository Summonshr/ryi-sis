<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AccessUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->can(match ($this->method()) {
            'POST' => 'create-roles_and_permissions',
            'PUT' => 'edit-roles_and_permissions',
            'DELETE' => 'delete-roles_and_permissions',
            default => 'avoid',
        });
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return match ($this->method()) {
            'POST' => [
                'name' => 'required|string|unique:roles,name',
            ],
            default => [],
        };
    }
}
