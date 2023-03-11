import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { router } from '@inertiajs/react';
import Checkbox from '@/Components/Checkbox';
import { upperFirst } from 'lodash';
import { Transition } from '@headlessui/react';

export default function Dashboard(props) {
    const { auth, errors, data } = props
    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            active="roles-and-permission"
        >
            <div className='input-form'>
                <h1 className="text-2xl mb-4 font-bold">Edit Role: <span>{upperFirst(data.role.name)}</span></h1>
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
