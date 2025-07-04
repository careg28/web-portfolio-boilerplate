<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ContactMessage;

class ContactMessageController extends Controller
{
    // Lista todos los mensajes de contacto
    public function index()
    {
        return response()->json(ContactMessage::all(), 200);
    }

    // Crea un nuevo mensaje de contacto
    public function store(Request $request)
    {
        $validated = $request->validate([
            'project_id' => 'nullable|exists:projects,id',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        $contactMessage = ContactMessage::create($validated);

        return response()->json($contactMessage, 201);
    }

    // Muestra un mensaje específico
    public function show($id)
    {
        $contactMessage = ContactMessage::find($id);

        if (!$contactMessage) {
            return response()->json(['message' => 'Mensaje de contacto no encontrado'], 404);
        }

        return response()->json($contactMessage, 200);
    }

    // Actualiza un mensaje existente
    public function update(Request $request, $id)
    {
        $contactMessage = ContactMessage::find($id);

        if (!$contactMessage) {
            return response()->json(['message' => 'Mensaje de contacto no encontrado'], 404);
        }

        $validated = $request->validate([
            'project_id' => 'nullable|exists:projects,id',
            'name' => 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|email|max:255',
            'message' => 'sometimes|required|string',
        ]);

        $contactMessage->update($validated);

        return response()->json($contactMessage, 200);
    }

    // Elimina un mensaje
    public function destroy($id)
    {
        $contactMessage = ContactMessage::find($id);

        if (!$contactMessage) {
            return response()->json(['message' => 'Mensaje de contacto no encontrado'], 404);
        }

        $contactMessage->delete();

        return response()->json(['message' => 'Mensaje de contacto eliminado'], 200);
    }
}
