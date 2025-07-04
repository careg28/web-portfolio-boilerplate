<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Testimonial;

class TestimonialSeeder extends Seeder
{
    public function run()
    {
        Testimonial::create([
            'project_id' => 1,
            'author_name' => 'Juan Pérez',
            'content' => '¡Excelente servicio y diseño!',
            'rating' => 5
        ]);

        Testimonial::create([
            'project_id' => 2,
            'author_name' => 'Marta García',
            'content' => 'La web me ayudó a conseguir más clientes.',
            'rating' => 4
        ]);
    }
}

