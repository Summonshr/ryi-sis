import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NavLink from '@/Components/NavLink';
import { router } from '@inertiajs/react';
import Table from '@/Components/Table';

export default function Dashboard({ auth, errors, data }) {
    return (
        <AuthenticatedLayout
            header="Roles and permissions"
            auth={auth}
            errors={errors}
            active="roles"
            breadcrumbs={
                [
                    { name: 'Roles and permissions', href: route('roles-and-permissions.index'), current: true },
                ]
            }
        >
            <div className="flex flex-wrap justify-end mb-4">
                <div>
                </div>
            </div>
            <Table data={data} pagination={false} className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.roles.map((role) => (
                        <tr key={role.id}>
                            <td>{role.id}</td>
                            <td className='main-td'>{role.name}</td>
                            <td>
                                {auth.permissions.includes('edit-roles_and_permissions') && <NavLink className='a-edit' href={route('roles-and-permissions.edit', [role.id])} > Edit</NavLink>}
                                {auth.permissions.includes('delete-roles_and_permissions') && <NavLink className='a-delete' onClick={(e) => {
                                    e.preventDefault()
                                    if (confirm('Are you sure you want to delete this course?')) {
                                        router.delete(route('roles-and-permissions.destroy', [role.id]), { action: 'delete' })
                                    }
                                }}> Delete</NavLink>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </AuthenticatedLayout >
    );
}
