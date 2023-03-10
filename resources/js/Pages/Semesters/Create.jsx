import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';

export default function Dashboard({ auth, errors: error, meta }) {
    const { data, setData, post, processing, errors } = useForm({
        action: 'create',
        season_id: '',
        year: '',
        start_date: '',
        end_date: '',
        open_date: '',
        close_date: '',
        grade_release_date: '',
        remarks: ''
    })


    function submit(e) {
        e.preventDefault()
        post('/taxonomy/semesters')
    }
    return (
        <AuthenticatedLayout
            auth={auth}
            errors={error}
            active="semesters"
        >
            <form onSubmit={submit}>
                <div className="max-w-md">
                    <div className="flex flex-col">
                        Season
                        <select id="season_id" name="season_id" value={data.season_id} onChange={e => setData('season_id', e.target.value)}>
                            <option value="">Select an option</option>
                            {meta.seasons.map(option => <option key={option.id} value={option.id}>{option.name}</option>)}
                        </select>
                        {errors.season_id && <span className="text-red-500">{errors.season_id}</span>}
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="year" className="leading-loose">Year</label>
                        <input type="number" minLength="4" maxLength="4" id="year" name="year" value={data.year} onChange={e => setData('year', e.target.value)} />
                        {errors.year && <span className="text-red-500">{errors.year}</span>}
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="start_date" className="leading-loose">Start Date</label>
                        <input type="date" id="start_date" name="start_date" value={data.start_date} onChange={e => setData('start_date', e.target.value)} />
                        {errors.start_date && <span className="text-red-500">{errors.start_date}</span>}
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="end_date" className="leading-loose">End Date</label>
                        <input type="date" id="end_date" name="end_date" value={data.end_date} onChange={e => setData('end_date', e.target.value)} />
                        {errors.end_date && <span className="text-red-500">{errors.end_date}</span>}
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="open_date" className="leading-loose">Open Date</label>
                        <input type="date" id="open_date" name="open_date" value={data.open_date} onChange={e => setData('open_date', e.target.value)} />
                        {errors.open_date && <span className="text-red-500">{errors.open_date}</span>}
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="close_date" className="leading-loose">Close Date</label>
                        <input type="date" id="close_date" name="close_date" value={data.close_date} onChange={e => setData('close_date', e.target.value)} />
                        {errors.close_date && <span className="text-red-500">{errors.close_date}</span>}
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="grade_release_date" className="leading-loose">Grade Release Date</label>
                        <input type="date" id="grade_release_date" name="grade_release_date" value={data.grade_release_date} onChange={e => setData('grade_release_date', e.target.value)} />
                        {errors.grade_release_date && <span className="text-red-500">{errors.grade_release_date}</span>}
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="remarks" className="leading-loose">Remarks</label>
                        <textarea type="text" id="remarks" name="remarks" value={data.remarks} onChange={e => setData('remarks', e.target.value)} />
                        {errors.remarks && <span className="text-red-500">{errors.remarks}</span>}
                    </div>

                    <div className="flex justify-end mt-4">
                        <button type="submit" className='btn btn-create' disabled={processing}>Create</button>
                    </div>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
