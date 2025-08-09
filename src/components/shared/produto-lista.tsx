"use client";

import { productTable, productVariantTable } from "@/db/schema";

import ProdutoItem from "./produto-item";

interface ProductListProps {
  title: string;
  products: (typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  })[];
}

const ProdutoLista = ({ title, products }: ProductListProps) => {
  return (
    <div className="space-y-6">
      <h3 className="px-5 font-semibold">{title}</h3>
      <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {products.map((product) => (
          <ProdutoItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProdutoLista;