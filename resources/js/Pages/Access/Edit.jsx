import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { router } from '@inertiajs/react';
import Checkbox from '@/Components/Checkbox';
import { upperFirst } from 'lodash';

export default function Dashboard(props) {
    const { data } = props
    return (
        <AuthenticatedLayout
            header="Roles and permissions"
            active="roles-and-permission"
            breadcrumbs={
                [
                    { name: 'Roles and permissions', href: route('roles-and-permissions.index'), current: false },
                    { name: 'Edit', href: '#', current: true },
                ]
            }
        >
            <div className='input-form'>
                <h1 className="mb-4 text-gray-600 text-sm">Edit Role: <span className="text-gray-800 font-bold text-sm">{upperFirst(data.role.name)}</span></h1>
                {data.permissions.map((permission) => {
                    return (
                        <div className='mb-4' key={permission.group}>
                            <label className='font-semibold text-gray-600'>
                                {upperFirst(permission.group).split('_').join(' ')}
                            </label>
                            <ul className="flex flex-wrap">
                                {permission.permissions.map(permission => <li key={permission.name} className="pr-8 text-gray-600"><Checkbox checked={permission.selected} onChange={() => {
                                    router.put(route('roles-and-permissions.update', data.role.id), {
                                        permission: permission.name
                                    }, {
                                        replace: false,
                                        preserveScroll: true,
                                        preserveState: true
                                    });
                                }} /> <span className='pl-2'>{permission.name.split('-')[0]}</span></li>)}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </AuthenticatedLayout>
    );
}
