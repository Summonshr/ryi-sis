import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';

export default function Dashboard(props) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    })

    function submit(e) {
        e.preventDefault()
        post('/dashboard')
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >

            <form onSubmit={submit}>
                <input type="text" value={data.email} onChange={e => setData('email', e.target.value)} />
                {true && <div>{errors.email}</div>}
                <input type="password" value={data.password} onChange={e => setData('password', e.target.value)} />
                {errors.password && <div>{errors.password}</div>}
                <input type="checkbox" checked={data.remember} onChange={e => setData('remember', e.target.checked)} /> Remember Me
                <button type="submit" disabled={processing}>Login</button>
            </form>
        </AuthenticatedLayout>
    );
}
