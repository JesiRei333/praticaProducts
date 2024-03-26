//import clsx from "clsx";
import { useEffect, useState } from "react";
//import { useForm } from "react-hook-form";
import Card from "../components/card";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      //.then(console.log)
      .then((json) => {
        setProducts(json.products);
      })
      .catch((error) => {
        console.error("Error fetching" + error);
      });
  }, []);

  return (
    <main className=" bg-slate-950 text-slate-300 min-h-screen flex flex-col items-center p-10 gap-10">
      <header className="">
        <h1 id="titulo" className="text-[70px] font-semibold ">
          Productos
        </h1>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-screen-md ">
        {products.map((product, index) => {
          return (
            <Card
              key={`product-${index}`}
              id={product.id}
              title={product.title}
              description={product.description}
            />
          );
        })}
      </section>
    </main>
  );
}
