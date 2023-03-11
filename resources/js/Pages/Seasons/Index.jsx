import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NavLink from '@/Components/NavLink';
import { router } from '@inertiajs/react';
import Table from '@/Components/Table';

export default function Dashboard({ auth, errors, data }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            active="seasons"
        >
            <div className="flex flex-wrap justify-end mb-4">
                <div>
                    {auth.permissions.includes('create-seasons') && <NavLink className='create-btn' href={route('taxonomy.get', ['seasons', 'create'])} > Create</NavLink>}
                </div>
            </div>
            <Table data={data} className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Remarks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.map((program) => (
                        <tr key={program.id}>
                            <td>{program.id}</td>
                            <td>{program.name}</td>
                            <td>{program.description}</td>
                            <td>{program.remarks}</td>
                            <td>
                                {auth.permissions.includes('edit-seasons') && <NavLink className='a-edit' href={route('taxonomy.get', ['seasons', 'edit', program.id])} > Edit</NavLink>}
                                {auth.permissions.includes('delete-seasons') && <NavLink className='text-red-600' onClick={(e) => {
                                    e.preventDefault()
                                    if (confirm('Are you sure you want to delete this program?')) {
                                        router.post('/taxonomy/seasons/' + program.id, { action: 'delete' })
                                    }
                                }} > Delete</NavLink>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table >
        </AuthenticatedLayout >
    );
}
