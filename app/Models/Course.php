<?php

namespace App\Models;

use App\Enums\CourseType;
use App\Models\Interfaces\TaxonomyInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Course extends TaxonomyInterface
{
    use HasFactory;

    protected $casts = [
        'credit' => 'integer',
        'type' => CourseType::class,
    ];

    public $fillable = [
        'name',
        'description',
        'remarks',
        'code',
        'transcript_name',
        'type',
        'credit',
        'prerequisite'
    ];


    public function rules($action)
    {
        return  match ($action) {
            'create' => [
                'name' => 'required|string|unique:courses,name',
                'description' => 'required|string',
                'remarks' => 'nullable|string',
                'code' => 'required|string|unique:courses,code',
                'transcript_name' => 'required|string',
                'type' => 'required|string|in:active,required',
                'credit' => 'required|integer',
                'prerequisite' => 'required|string',
            ],
            'edit' => [
                'name' => 'required|string|unique:courses,name,'.$this->id,
                'description' => 'required|string',
                'remarks' => 'nullable|string',
                'code' => 'required|string|unique:courses,code,' . $this->id,
                'transcript_name' => 'required|string',
                'type' => 'required|string|in:active,required',
                'credit' => 'required|integer',
                'prerequisite' => 'required|string',
            ],
            default => []
        };
    }
}
