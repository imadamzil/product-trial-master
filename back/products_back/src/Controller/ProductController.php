<?php

namespace App\Controller;

use App\Repository\ProductRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ProductController extends AbstractController
{
     /**
     * @Route("/api/products/total", methods={"GET"})
     */
    public function getTotalProducts(ProductRepository $productRepository): JsonResponse
    {
        $total = $productRepository->count([]);

        return $this->json(['total' => $total]);
    }
}
