import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NavLink from '@/Components/NavLink';
import { router } from '@inertiajs/react';
import Table from '@/Components/Table';

export default function Dashboard({  data, permissions }) {
    return (
        <AuthenticatedLayout
            header="Programs"
            active="programs"
            breadcrumbs={
                [
                    { name: 'Programs', href: route('taxonomy.get', ['programs']), current: true },
                ]
            }
        >
            <div className="card-header">
                <div className='title'>
                    <h2>Programs</h2>
                    <p>A list of all programs</p>
                </div>
                <div>
                    {permissions.includes('create-programs') && <NavLink className='create-btn' href={route('taxonomy.get', ['programs', 'create'])} > Create new program</NavLink>}
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
                            <td className='main-td'>{program.name}</td>
                            <td>{program.description}</td>
                            <td>{program.remarks}</td>
                            <td>
                                {permissions.includes('edit-programs') && <NavLink className='a-edit' href={route('taxonomy.get', ['programs', 'edit', program.id])} > Edit</NavLink>}
                                {permissions.includes('delete-programs') && <NavLink className='a-delete' onClick={(e) => {
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
