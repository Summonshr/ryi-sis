import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NavLink from '@/Components/NavLink';
import { router } from '@inertiajs/react';
import Table from '@/Components/Table';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            active="courses"
        >
            <div className="flex flex-wrap justify-end mb-4">
                <div>
                    <NavLink className='create-btn' href={route('dashboard', ['courses', 'create'])} >Create</NavLink>
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
                    {props.data.data.map((course) => (
                        <tr key={course.id}>
                            <td>{course.id}</td>
                            <td>{course.name}</td>
                            <td>{course.description}</td>
                            <td>{course.remarks}</td>
                            <td>
                                <NavLink className='a-edit' href={route('dashboard', ['courses', 'edit', course.id])} > Edit</NavLink>
                                <NavLink className='text-red-600' onClick={(e) => {
                                    e.preventDefault()
                                    if (confirm('Are you sure you want to delete this course?')) {
                                        router.post('/taxonomy/courses/' + course.id, { action: 'destroy' })
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
