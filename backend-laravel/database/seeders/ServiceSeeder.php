<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Service;

class ServiceSeeder extends Seeder
{
    public function run()
    {
        Service::create([
            'project_id' => 1,
            'name' => 'Reserva de mesas online',
            'description' => 'Permite a los clientes reservar su mesa fácilmente.'
        ]);

        Service::create([
            'project_id' => 1,
            'name' => 'Carta digital',
            'description' => 'Visualiza la carta desde cualquier dispositivo móvil.'
        ]);

        Service::create([
            'project_id' => 2,
            'name' => 'Catálogo de productos',
            'description' => 'Muestra todos los productos en la tienda online.'
        ]);
    }
}
