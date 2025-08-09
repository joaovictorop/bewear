import { desc } from "drizzle-orm";
import Image from "next/image";

import Footer from "@/components/shared/footer";
import ProdutoList from "@/components/shared/produto-lista";
import { Header } from "@/components/shared/header";
import { db } from "@/db";
import { productTable } from "@/db/schema";
import CategoriaSeletor from "@/components/shared/categoria-seletor";

const Home = async () => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });
  const newlyCreatedProducts = await db.query.productTable.findMany({
    orderBy: [desc(productTable.createdAt)],
    with: {
      variants: true,
    },
  });
  const categories = await db.query.categoryTable.findMany({});

  return (
    <>
      <Header />
      <div className="space-y-6">
        <div className="px-5">
          <Image
            src="/banner-01.png"
            alt="Leve uma vida com estilo"
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>

        <ProdutoList products={products} title="Mais vendidos" />

        <div className="px-5">
          <CategoriaSeletor categories={categories} />
        </div>

        <div className="px-5">
          <Image
            src="/banner-02.png"
            alt="Leve uma vida com estilo"
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>

        <ProdutoList products={newlyCreatedProducts} title="Novos produtos" />
        <Footer />
      </div>
    </>
  );
};

export default Home;