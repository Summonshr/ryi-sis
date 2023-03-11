<?php

namespace App\Models;

use App\Models\Interfaces\TaxonomyInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Season extends TaxonomyInterface
{
    use HasFactory;

    public $fillable = [
        'name',
        'description',
        'remarks',
    ];

    public function rules()
    {
        return  match (request('action')) {
            'create' => [
                'name' => 'required|string|unique:seasons,name',
                'description' => 'required|string',
                'remarks' => 'nullable|string',
            ],
            'edit' => [
                'name' => 'required|string|unique:seasons,name,'.$this->id,
                'description' => 'required|string',
                'remarks' => 'nullable|string',
            ]
        };
    }
}
