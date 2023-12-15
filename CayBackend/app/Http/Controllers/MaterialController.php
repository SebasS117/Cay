<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Material;

class MaterialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $materia = Material::all();
            return response()->json($materia, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'error en la solicitud'], 404);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'nombre' => 'required',
                'cantidad' => 'required',
                'deposito' => 'required',
                'reutilizable' => 'required',
            ]);

            $materia = Material::create([
                'nombre' => $request->nombre,
                'cantidad' => $request->cantidad,
                'deposito' => $request->deposito,
                'reutilizable' => $request->reutilizable,
            ]);

            return response()->json($materia, 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'error en la solicitud'], 404);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $materia = Material::find($id);
            return response()->json($materia, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'error en la solicitud'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            $materia = Material::findOrFail($id)->update($request->all());
            return response()->json($materia, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'error en la solicitud'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            Material::find($id)->delete();
            return response()->json(['message' => 'Eliminado correctamente']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'error en la solicitud'], 404);
        }
    }
}
