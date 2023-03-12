<?php

namespace App\Models\Interfaces;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

abstract class TaxonomyInterface extends Model
{
    use SoftDeletes;
    public static $rules;
}
