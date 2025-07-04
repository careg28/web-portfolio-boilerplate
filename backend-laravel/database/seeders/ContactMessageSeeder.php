<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ContactMessage;

class ContactMessageSeeder extends Seeder
{
    public function run()
    {
        ContactMessage::create([
            'project_id' => 1,
            'name' => 'Pedro Cliente',
            'email' => 'pedro@cliente.com',
            'message' => 'Hola, ¿puedo reservar para 4 personas?'
        ]);

        ContactMessage::create([
            'project_id' => 2,
            'name' => 'Ana Compra',
            'email' => 'ana@compra.com',
            'message' => '¿Tienen envíos a domicilio?'
        ]);
    }
}
