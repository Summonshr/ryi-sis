<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Season;
use App\Models\User;
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
            'course_categories',
            'programs',
            'sections',
            'semester_courses',
            'textbooks',
            'users',
            'roles_and_permissions',
        ])->map(
            function ($permission) {
                collect([
                    'read', 'create', 'edit', 'delete', 'list'
                ])->map(function ($action) use ($permission) {
                    \Spatie\Permission\Models\Permission::create([
                        'name' => $action . '-' . $permission,
                        'guard_name' => 'web',
                    ]);
                });
            }
        );

        $user = User::first();
        $user->assignRole('super-admin');
        $user->roles[0]->givePermissionTo('read-roles_and_permissions');
        $user->roles[0]->givePermissionTo('edit-roles_and_permissions');

        Season::truncate();

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
