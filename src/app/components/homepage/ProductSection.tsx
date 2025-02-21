"use client";

import { ApiProduct, Product } from "@/app/interfaces/Products";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ProductSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://67b8d8c9699a8a7baef57ad0.mockapi.io/api/products"
      );
      const data: ApiProduct[] = await response.json();
      setProducts(data.map((product: ApiProduct) => new Product(product)));
      setLoading(false);
    };
    fetchProducts();
  }, []);
  return (
    <div className="min-h-screen container max-sm:px-4 py-12">
      <h2 className="text-4xl font-bold">Products</h2>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mt-12">
          {products.map((product: Product) => (
            <div
              key={product.id}
              className="bg-white/30 backdrop-blur-lg rounded-2xl p-4 flex flex-col justify-between gap-8 shadow-lg"
            >
              <div className="text-black flex flex-col items-start justify-start gap-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-sm text-gray-900">{product.description}</p>
                <p className="text-lg font-bold">${product.price}</p>
              </div>
              <div className="flex justify-between">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  <Link href={`/products/${product.id}`}>View Product</Link>
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductSection;
