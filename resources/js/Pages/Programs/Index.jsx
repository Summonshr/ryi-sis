import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NavLink from '@/Components/NavLink';
import { router } from '@inertiajs/react';
import Table from '@/Components/Table';

export default function Dashboard({auth, errors, data}) {
    console.log(auth)
    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            active="programs"
        >
            <div className="flex flex-wrap justify-end mb-4">
                <div>
                    {auth.permissions.includes('create-programs') && <NavLink className='create-btn' href={route('taxonomy.get', ['programs', 'create'])} > Create</NavLink>}
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
                                {auth.permissions.includes('edit-programs') && <NavLink className='a-edit' href={route('taxonomy.get', ['programs', 'edit', program.id])} > Edit</NavLink>}
                                {auth.permissions.includes('delete-programs') && <NavLink className='text-red-600' onClick={(e) => {
                                    e.preventDefault()
                                    if (confirm('Are you sure you want to delete this program?')) {
                                        router.post('/taxonomy/programs/' + program.id, { action: 'delete' })
                                    }
                                }} > Delete</NavLink>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </AuthenticatedLayout >
    );
}
