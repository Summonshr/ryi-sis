import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NavLink from '@/Components/NavLink';
import Pagination from '@/Components/Pagination';
import { router } from '@inertiajs/react';
import Table from '@/Components/Table';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            active="programs"
        >
            <div className="flex flex-wrap justify-end mb-4">
                <div>
                    <NavLink className='create-btn' href={route('dashboard', ['programs', 'create'])} > Create</NavLink>
                </div>
            </div>
            <Table data={props.data} className="table">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Remarks</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {props.data.data.map((program) => (
                        <tr key={program.id}>
                            <td>{program.id}</td>
                            <td>{program.name}</td>
                            <td>{program.description}</td>
                            <td>{program.remarks}</td>
                            <td>
                                <NavLink className='a-edit' href={route('dashboard', ['programs', 'edit', program.id])} > Edit</NavLink>
                                <NavLink className='text-red-600' onClick={(e) => {
                                    e.preventDefault()
                                    if (confirm('Are you sure you want to delete this program?')) {
                                        router.post('/taxonomy/programs/' + program.id, { action: 'destroy' })
                                    }
                                }} > Delete</NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </AuthenticatedLayout >
    );
}
