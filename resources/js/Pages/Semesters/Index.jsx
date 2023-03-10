import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NavLink from '@/Components/NavLink';
import Pagination from '@/Components/Pagination';
import { router } from '@inertiajs/react';
import Table from '@/Components/Table';

export default function Dashboard(props) {
    console.log(props)
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            active="semesters"
        >
            <div className="flex flex-wrap justify-end mb-4">
                <div>
                    <NavLink className='create-btn' href={route('dashboard', ['semesters', 'create'])} > Create</NavLink>
                </div>
            </div>
            <Table data={props.data} className="table">
                <thead>
                    <th>ID</th>
                    <th>Season</th>
                    <th>Year</th>
                    <th>Start date</th>
                    <th>End date</th>
                    <th>Open Date</th>
                    <th>Close Date</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {props.data.data.map((semester) => (
                        <tr key={semester.id}>
                            <td>{semester.id}</td>
                            <td>{semester.season.name}</td>
                            <td>{semester.year}</td>
                            <td>{semester.start_date}</td>
                            <td>{semester.end_date}</td>
                            <td>{semester.open_date}</td>
                            <td>{semester.close_date}</td>
                            <td>
                                <NavLink className='a-edit' href={route('dashboard', ['semesters', 'edit', semester.id])} > Edit</NavLink>
                                <NavLink className='text-red-600' onClick={(e) => {
                                    e.preventDefault()
                                    if (confirm('Are you sure you want to delete this semester?')) {
                                        router.post('/taxonomy/semesters/' + semester.id, { action: 'destroy' })
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
