import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';

export default function Dashboard(props) {
    const { data, setData, post, processing, errors } = useForm({
        action: 'edit',
        name: props.data.name,
        description: props.data.description,
        remarks: props.data.remarks,
        transcript_name: props.data.transcript_name,
        type: props.data.type,
        code: props.data.code,
        credit: props.data.credit,
        prerequisite: props.data.prerequisite
    })

    function submit(e) {
        e.preventDefault()
        post('/taxonomy/courses/' + props.data.id)
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            active="courses"
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
                        <textarea class="text-field" type="text" id="remarks" name="remarks" value={data.remarks} onChange={e => setData('remarks', e.target.value)} />
                        {errors.remarks && <span className="text-red-500">{errors.remarks}</span>}
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="type" className="leading-loose">Type</label>
                        <select className="text-field" name="type" id="type" value={data.type} onChange={e => setData('type', e.target.value)}>
                            <option value="active">Active</option>
                            <option value="required">Required</option>
                        </select>
                        {errors.type && <span className="text-red-500">{errors.type}</span>}
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="code" className="leading-loose">Code</label>
                        <input className="text-field" type="text" id="code" name="code" value={data.code} onChange={e => setData('code', e.target.value)} />
                        {errors.code && <span className="text-red-500">{errors.code}</span>}
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="transcript_name" className="leading-loose">Transcript name</label>
                        <input className="text-field" type="text" id="transcript_name" name="transcript_name" value={data.transcript_name} onChange={e => setData('transcript_name', e.target.value)} />
                        {errors.transcript_name && <span className="text-red-500">{errors.transcript_name}</span>}
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="credit" className="leading-loose">Credit</label>
                        <input className="text-field" type="number" id="credit" name="credit" value={data.credit} onChange={e => setData('credit', parseInt(e.target.value, '10'))} />
                        {errors.credit && <span className="text-red-500">{errors.credit}</span>}
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="prerequisite" className="leading-loose">Pre requisites</label>
                        <textarea className="text-field" type="text" id="prerequisite" name="prerequisite" value={data.prerequisite} onChange={e => setData('prerequisite', e.target.value)} />
                        {errors.prerequisite && <span className="text-red-500">{errors.prerequisite}</span>}
                    </div>
                    <div className="flex justify-end mt-4">
                        <button type="submit" className='btn btn-edit' disabled={processing}>Update</button>
                    </div>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
