<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('programs', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description');
            $table->text('remarks');
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('seasons', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description');
            $table->text('remarks');
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('semesters', function (Blueprint $table) {
            $table->id();
            $table->foreignId('season_id')->constrained();
            $table->string('year');
            $table->date('start_date');
            $table->date('end_date');
            $table->date('open_date');
            $table->date('close_date');
            $table->date('grade_release_date');
            $table->string('description')->nullable();
            $table->text('remarks')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('course_categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description');
            $table->text('remarks');
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('code');
            $table->string('name');
            $table->string('transcript_name');
            $table->string('description');
            $table->string('type');
            $table->integer('credit');
            $table->text('prerequisite');
            $table->text('remarks');
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('course_programs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('course_id')->constrained();
            $table->foreignId('program_id')->constrained();
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('semester_courses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('semester_id')->constrained();
            $table->foreignId('course_id')->constrained();
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('sections', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('course_id')->constrained();
            $table->string('description');
            $table->text('remarks');
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('textbooks', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description');
            $table->text('remarks');
            $table->string('publisher');
            $table->string('author');
            $table->string('year');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('programs');
        Schema::dropIfExists('seasons');
        Schema::dropIfExists('semesters');
        Schema::dropIfExists('course_categories');
        Schema::dropIfExists('course_programs');
        Schema::dropIfExists('courses');
        Schema::dropIfExists('semester_courses');
        Schema::dropIfExists('sections');
        Schema::dropIfExists('textbooks');
    }
};
