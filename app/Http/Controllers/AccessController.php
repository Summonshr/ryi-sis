<?php

namespace App\Http\Controllers;

use App\Http\Requests\AccessUpdateRequest;
use App\Http\Requests\AccessViewRequest;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class AccessController extends Controller
{
    public function index(AccessViewRequest $request)
    {
        return Inertia::render('Access/Index', [
            'data' => [
                'roles' => \Spatie\Permission\Models\Role::all(),
                'permissions' => \Spatie\Permission\Models\Permission::all(),
            ],
        ]);
    }

    public function edit(AccessViewRequest $request, Role $role)
    {
        return Inertia::render('Access/Edit', [
            'data' => [
                'role' => $role,
                'permissions' => \Spatie\Permission\Models\Permission::all()->map(function ($e) use ($role) {
                    $e->selected = $role->hasPermissionTo($e->name);

                    return $e;
                })->groupBy(function ($permission) {
                    return explode('-', $permission->name)[1];
                })->map(fn ($e, $a) => [
                    'group' => $a,
                    'permissions' => $e,
                ])->values(),
            ],
        ]);
    }

    public function destroy(AccessUpdateRequest $request, Role $role)
    {
        $role->delete();
    }

    public function update(Role $role, AccessUpdateRequest $request)
    {
        if ($role->hasPermissionTo($request->permission)) {
            $role->revokePermissionTo($request->permission);

            return;
        }
        $role->givePermissionTo($request->permission);
    }
}
