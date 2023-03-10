<?php

namespace App\Http\Requests;

use App\Models\Interfaces\TaxonomyInterface;
use Illuminate\Foundation\Http\FormRequest;

class TaxonomyRequest extends FormRequest
{
    public function __construct(TaxonomyInterface $model)
    {
        $this->model = $model;
    }
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        $rules = [
            'action' => ['string', 'in:store,update,destroy,create,edit,index'],
        ];
        if ($this->has(['action']) && $this->get('action') !== 'destroy') {
            $rules = array_merge($rules, $this->model->rules($this->action));
        }

        return $rules;
    }
}
