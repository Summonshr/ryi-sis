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
        post('/taxonomy/semester')
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <form onSubmit={submit}>
                <input type="text" value={data.email} onChange={e => setData('email', e.target.value)} />
                <button type="submit" disabled={processing}>Submit</button>
            </form>
        </AuthenticatedLayout>
    );
}
