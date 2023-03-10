<?php

namespace App\Models;

use App\Models\Interfaces\TaxonomyInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Program extends TaxonomyInterface
{
    use HasFactory;

    public $fillable = [
        'name',
        'description',
        'remarks',
    ];

    public function rules($action)
    {
        return  match ($action) {
            'create' => [
                'name' => 'required|string|unique:programs,name',
                'description' => 'required|string',
                'remarks' => 'nullable|string',
            ],
            'edit' => [
                'name' => 'required|string|unique:programs,name,' . $this->id,
                'description' => 'required|string',
                'remarks' => 'nullable|string',
            ]
        };
    }
}
