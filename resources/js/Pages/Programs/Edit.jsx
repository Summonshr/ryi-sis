import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';

export default function Dashboard(props) {
    const { data, setData, post, processing, errors } = useForm({
        action: 'edit',
        name: props.data.name,
        description: props.data.description,
        remarks: props.data.remarks,
    })

    function submit(e) {
        e.preventDefault()
        post('/taxonomy/programs/' + props.data.id)
    }
    return (
        <AuthenticatedLayout
            header="Programs"
            breadcrumbs={[
                { name: 'Programs', href: route('taxonomy.get','programs'), current: false },
                { name: 'Edit program', href: '#', current: true },
            ]}
            auth={props.auth}
            errors={props.errors}
            active="programs"
        >
            <form onSubmit={submit} className='input-form'>
                <div className="max-w-md">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="leading-loose">Name</label>
                        <input className="text-field" type="text" id="name" name="name" value={data.name} onChange={e => setData('name', e.target.value)} />
                        {errors.name && <span className="text-red-500">{errors.name}</span>}
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="description" className="leading-loose">Description</label>
                        <input className="text-field" type="text" id="description" name="description" value={data.description} onChange={e => setData('description', e.target.value)} />
                        {errors.description && <span className="text-red-500">{errors.description}</span>}
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="remarks" className="leading-loose">Remarks</label>
                        <textarea className="text-field" type="text" id="remarks" name="remarks" value={data.remarks} onChange={e => setData('remarks', e.target.value)} />
                        {errors.remarks && <span className="text-red-500">{errors.remarks}</span>}
                    </div>
                    <div className="flex justify-end mt-4">
                        <button type="submit" className='btn btn-edit' disabled={processing}>Update</button>
                    </div>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
