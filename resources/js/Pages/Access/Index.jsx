import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NavLink from '@/Components/NavLink';
import { router } from '@inertiajs/react';
import Table from '@/Components/Table';

export default function Dashboard({ data, permissions }) {
    return (
        <AuthenticatedLayout
            header="Roles and permissions"
            active="roles"
            breadcrumbs={
                [
                    { name: 'Roles and permissions', href: route('roles-and-permissions.index'), current: true },
                ]
            }
        >
            <div className="flex flex-wrap justify-end mb-4">
                <div>
                    <button className="create-btn" onClick={() => {
                        let name = prompt('Role name?')
                        if (name && data.roles.map(role => role.name).indexOf(name) === -1) {
                            router.post(route('roles-and-permissions.store'), { name })
                            return
                        }

                        alert('Role name is required and must be unique.')

                    }}>Create new role</button>
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
                                {permissions.includes('edit-roles_and_permissions') && <NavLink className='a-edit' href={route('roles-and-permissions.edit', [role.id])} > Edit</NavLink>}
                                {permissions.includes('delete-roles_and_permissions') && <NavLink className='a-delete' onClick={(e) => {
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
