<?php

namespace App\Models;

use App\Models\Interfaces\TaxonomyInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Semester extends TaxonomyInterface
{
    use HasFactory;

    public $with = ['season'];

    public $fillable = [
        'remarks',
        'year',
        'season_id',
        'start_date',
        'end_date',
        'open_date',
        'close_date',
        'grade_release_date',
    ];

    public function season()
    {
        return $this->belongsTo(Season::class, 'season_id');
    }

    public function rules($action)
    {
        return  match ($action) {
            'create' => [
                'remarks' => 'nullable|string',
                'year' => 'required|integer',
                'season_id' => 'required|integer',
                'start_date' => 'required|date',
                'end_date' => 'required|date',
                'open_date' => 'required|date',
                'close_date' => 'required|date',
                'grade_release_date' => 'required|date',
            ],
            'edit' => [
                'remarks' => 'nullable|string',
                'year' => 'required|integer',
                'season_id' => 'required|integer',
                'start_date' => 'required|date',
                'end_date' => 'required|date',
                'open_date' => 'required|date',
                'close_date' => 'required|date',
                'grade_release_date' => 'required|date',
            ]
        };
    }
}
