<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Season;
use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(50)->create();

        \Spatie\Permission\Models\Permission::truncate();
        \Spatie\Permission\Models\Role::truncate();
        $roles = collect(config('roles'));
        $roles->map(
            fn ($role) => \Spatie\Permission\Models\Role::create([
                'name' => $role,
            ])
        );

        User::all()->map(function ($user) use ($roles) {
            $user->assignRole($roles->random());
        });

        collect(config('permissions'))->map(
            function ($permission) {
                collect([
                    'read', 'create', 'edit', 'delete', 'list',
                ])->map(
                    fn ($action) =>
                    \Spatie\Permission\Models\Permission::create([
                        'name' => $action . '-' . $permission,
                        'guard_name' => 'web',
                    ])
                );
            }
        );

        $role = Role::where('name', 'super-admin')->first();
        $role->givePermissionTo('read-roles_and_permissions');
        $role->givePermissionTo('edit-roles_and_permissions');
        $role->givePermissionTo('delete-roles_and_permissions');

        Season::truncate();

        collect(['Spring', 'Fall', 'Winter', 'Summer'])->map(
            fn ($season) => Season::create([
                'name' => $season,
                'description' => $season . ' season',
                'remarks' => '',
                'created_by_id' => '1',
                'updated_by_id' => '1'
            ])
        );
    }
}
