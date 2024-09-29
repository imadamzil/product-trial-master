<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\Product;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class ProductsFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);

        $faker = Factory::create('fr_FR');
        $inventoryStatus = ['INSTOCK', 'LOWSTOCK', 'OUTOFSTOCK'];
        $categories = ['Électronique', 'Vêtements', 'Maison', 'Jouets', 'Sports'];



        for ($i = 0; $i < 100; $i++) {

            $product = new Product();
            $product->setCode($faker->unique()->ean7);
            $product->setName($faker->words(3, true));
            $product->setDescription($faker->sentence(10));
            $product->setImage($faker->imageUrl(640, 480, 'technics', true));
            $product->setCategory($faker->randomElement($categories));
            $product->setPrice($faker->randomFloat(2, 10, 200));
            $product->setQuantity($faker->numberBetween(0, 100));
            $product->setInternalReference($faker->uuid);
            $product->setShellId($faker->numberBetween(1, 1000));
            $product->setInventoryStatus($faker->randomElement($inventoryStatus));
            $product->setRating($faker->randomFloat(1, 0, 5));
            $product->setCreatedAt($faker->dateTimeBetween('-1 years', 'now'));
            $product->setUpdatedAt($faker->dateTimeBetween('-1 years', 'now'));
            $manager->persist($product);
        }

        $manager->flush();
    }
}
