<?php

namespace App\Http\Controllers;

use App\Http\Requests\TaxonomyRequest;
use App\Models\Interfaces\TaxonomyInterface;
use App\Models\Season;
use Inertia\Inertia;

class TaxonomyController extends Controller
{
    public function index(TaxonomyRequest $request, TaxonomyInterface $model)
    {
        $meta = [
            'seasons' => Season::all(),
        ];

        return Inertia::render(ucfirst(request('taxonomy', 'dashboard') . '/' . ucfirst(request('action'))))->with([
            'taxonomy' => request('taxonomy', 'dashboard'),
            'data' => $model->id ? $model : $model->latest()->paginate(5),
            'meta' => $meta,
        ]);
    }

    public function action(TaxonomyRequest $request)
    {
        $request->model->updated_by_id = auth()->id();

        if ($request->model->exists === false) {
            $request->model->created_by_id = auth()->id();
        }

        if ($request->get('action') === 'delete') {
            $request->model->deleted_by_id = auth()->id();
        }

        match ($request->get('action')) {
            'delete' => $request->model->delete(),
            default => $request->model->fill($request->only($request->model->fillable))->save()
        };

        return to_route('taxonomy.get', ['taxonomy' => request('taxonomy'), 'action' => request('to_action')]);
    }
}
