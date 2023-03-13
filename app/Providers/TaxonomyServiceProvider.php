<?php

namespace App\Providers;

use App\Models\Course;
use App\Models\CourseCategory;
use App\Models\Interfaces\TaxonomyInterface;
use App\Models\Program;
use App\Models\Season;
use App\Models\Section;
use App\Models\Semester;
use App\Models\SemesterCourse;
use App\Models\Textbook;
use Illuminate\Support\ServiceProvider;

class TaxonomyServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(TaxonomyInterface::class, function () {
            $model = $this->app->make(match (request()->route('taxonomy')) {
                'sections' => Section::class,
                'course_categories' => CourseCategory::class,
                'courses' => Course::class,
                'programs' => Program::class,
                'semesters' => Semester::class,
                'textbooks' => Textbook::class,
                'seasons' => Season::class,
                'semester_courses' => SemesterCourse::class,
                default => null,
            });
            if (request()->route('taxonomy_id')) {
                return $model->findOrFail(request()->route('taxonomy_id'));
            }

            return $model;
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
    }
}
