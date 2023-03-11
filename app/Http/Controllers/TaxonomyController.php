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
            'seasons' => Season::all()
        ];

        return Inertia::render(ucfirst(request('taxonomy', 'dashboard') . '/' . ucfirst(request('action'))))->with([
            'taxonomy' => request('taxonomy', 'dashboard'),
            'data' => $model->id ? $model : $model->latest()->paginate(5),
            'meta' => $meta
        ]);
    }

    public function action(TaxonomyRequest $request)
    {
        match ($request->get('action')) {
            'delete' => $request->model->delete(),
            default => $request->model->fill($request->only($request->model->fillable))->save()
        };

        return to_route('taxonomy.get', ['taxonomy' => request('taxonomy'), 'action' => request('to_action')]);
    }
}
