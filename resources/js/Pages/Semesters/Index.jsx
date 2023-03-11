import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NavLink from '@/Components/NavLink';
import { router } from '@inertiajs/react';
import Table from '@/Components/Table';

export default function Dashboard({ auth, errors, data }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            active="semesters"
        >
            <div className="flex flex-wrap justify-end mb-4">
                <div>
                    {auth.permissions.includes('create-semesters') && <NavLink className='create-btn' href={route('taxonomy.get', ['semesters', 'create'])} > Create</NavLink>}
                </div>
            </div>
            <Table data={data} className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Season</th>
                        <th>Year</th>
                        <th>Start date</th>
                        <th>End date</th>
                        <th>Open Date</th>
                        <th>Close Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.map((semester) => (
                        <tr key={semester.id}>
                            <td>{semester.id}</td>
                            <td>{semester.season.name}</td>
                            <td>{semester.year}</td>
                            <td>{semester.start_date}</td>
                            <td>{semester.end_date}</td>
                            <td>{semester.open_date}</td>
                            <td>{semester.close_date}</td>
                            <td>
                                {auth.permissions.includes('edit-semesters') && <NavLink className='a-edit' href={route('taxonomy.get', ['semesters', 'edit', semester.id])} > Edit</NavLink>}
                                {auth.permissions.includes('delete-semesters') && <NavLink className='text-red-600' onClick={(e) => {
                                    e.preventDefault()
                                    if (confirm('Are you sure you want to delete this semester?')) {
                                        router.post('/taxonomy/semesters/' + semester.id, { action: 'delete' })
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
