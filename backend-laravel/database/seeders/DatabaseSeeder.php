<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
        ProjectSeeder::class,
        ServiceSeeder::class,
        TestimonialSeeder::class,
        ContactMessageSeeder::class,
    ]);
    }
}
