<?php

namespace Database\Seeders;
use App\Models\Project;
use Illuminate\Database\Seeder;
class ProjectSeeder extends Seeder
{
    public function run()
    {
        Project::create([
            'name' => 'Restaurante Demo',
            'slug' => 'restaurante-demo',
            'description' => 'Sitio web de muestra para restaurante.',
            'sector' => 'Restaurante',
            'image' => 'https://via.placeholder.com/300'
        ]);

        Project::create([
            'name' => 'Tienda Ejemplo',
            'slug' => 'tienda-ejemplo',
            'description' => 'Demo para una tienda local.',
            'sector' => 'Tienda',
            'image' => 'https://via.placeholder.com/300'
        ]);
    }
}
