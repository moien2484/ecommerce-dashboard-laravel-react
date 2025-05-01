<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'category_id'=>1,
            'title'=>fake()->name(),
            'description'=>fake()->text(),
            'thumbnail_url'=>'https://via.placeholder.com/150',
            'demo_url'=>'https://via.placeholder.com/150',
            'source_url'=>fake()->imageUrl(),
            'price'=>fake()->numberBetween(1000 , 1000000),

        ];
    }
}
