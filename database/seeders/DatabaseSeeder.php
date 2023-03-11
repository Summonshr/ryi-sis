<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Season;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \Spatie\Permission\Models\Permission::truncate();
        \Spatie\Permission\Models\Role::truncate();
        collect([
            'admin',
            'user',
            'student',
            'staff',
            'instructor',
            'super-admin',
        ])->map(
            fn ($role) =>
            \Spatie\Permission\Models\Role::create([
                'name' => $role,
            ])
        );

        collect([
            'semesters',
            'seasons',
            'courses',
            'course-categories',
            'programs',
            'sections',
            'semester-courses',
            'textbooks',
            'users'
        ])->map(
            function($permission) {
                collect([
                    'read','create','edit','delete','list'
                ])->map(function($action) use ($permission) {
                    \Spatie\Permission\Models\Permission::create([
                        'name' => $action . '-' . $permission,
                        'guard_name' => 'web'
                    ]);
            });
        });

        collect(['Spring', 'Fall', 'Winter', 'Summer'])->map(
            fn ($season) =>
            Season::create([
                'name' => $season,
                'description' => $season . ' season',
                'remarks' => '',
            ])
        );
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
