import jsondb from "../jsondb/products";
//import { Card, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
export default function ProductList() {
  return (
    <div className="container mx-auto mt-10 min-h-screen px-4 pb-20">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {jsondb.products.map((product) => (
          <div
            key={product.name}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            {/* Link &  Image*/}
            <Link
              href={`/products/${product.url}`}
              className="relative block aspect-4/3 w-full overflow-hidden bg-slate-100 dark:bg-slate-800"
            >
              <Image
                src={product.picture}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </Link>
            {/* Body*/}
            <div className="flex flex-1 flex-col p-5">
              <div className="flex-1">
                <div className="flex flex-col items-start justify-between gap-2">
                  <h3 className="text-sm font-bold tracking-tight text-slate-900 dark:text-white line-clamp-1 ">
                    {product.name}
                  </h3>

                  <p className="shrink-0 text-lg font-black text-emerald-600">
                    {product.price} €
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3">
                  {product.definition}
                </p>
              </div>
              <div className="mt-6">
                <button className="w-full rounded-xl bg-[#D926EF] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-purple-500/20 transition-all hover:bg-[#C022D4] active:scale-[0.98]">
                  In den Warenkorb
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
