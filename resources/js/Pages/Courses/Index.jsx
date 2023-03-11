import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NavLink from '@/Components/NavLink';
import { router } from '@inertiajs/react';
import Table from '@/Components/Table';

export default function Dashboard({ auth, errors, data }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            header="Courses"
            active="courses"
            breadcrumbs={
                [
                    { name: 'Courses', href: route('taxonomy.get', ['courses']), current: true },
                ]
            }
        >
            <div className="card-header">
                <div className='title'>
                    <h2>Courses</h2>
                    <p>A list of all courses</p>
                </div>
                <div>
                    {auth.permissions.includes('create-courses') && <NavLink className='create-btn' href={route('taxonomy.get', ['courses', 'create'])} >Create new course</NavLink>}
                </div>
            </div>
            <Table data={data} className="table">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Remarks</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {data.data.map((course) => (
                        <tr key={course.id}>
                            <td>{course.id}</td>
                            <td className="main-td">{course.name}</td>
                            <td>{course.description}</td>
                            <td>{course.remarks}</td>
                            <td>
                                {auth.permissions.includes('edit-courses') && <NavLink className='a-edit' href={route('taxonomy.get', ['courses', 'edit', course.id])} > Edit</NavLink>}
                                {auth.permissions.includes('delete-courses') && <NavLink className='a-delete' onClick={(e) => {
                                    e.preventDefault()
                                    if (confirm('Are you sure you want to delete this course?')) {
                                        router.post('/taxonomy/courses/' + course.id, { action: 'delete' })
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
