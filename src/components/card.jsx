import { useEffect, useState } from "react";

export default function Card(props) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${props.id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [props.id]);

  if (!product.images) {
    return (
      <article className="w-full bg-slate-800 animate-pulse min-h-20"></article>
    );
  }

  return (
    <article
      className="font-extralight align-super text-neutral-50/50 flex flex-col items-center p-3 hover:translate-x-4 hover:translate-y-4 hover:shadow-xl  hover:shadow-cyan-700 rounded-[20px]   hover:text-slate-100 hover:font-medium text-start"
      onClick={""}
    >
      <div className=" rounded-[20px] flex flex-col align-middle content-center items-center ">
        <div className="  rounded-[20px] ">
          <p className=" text-white text-base font-semibold">{props.title}</p>
        </div>

        <div className=" max-h-[250px]  max-w-[200px] min-h-[250px] min-w-[200px]  flex rounded-[20px]  ">
          <img
            className="pb-4  rounded-[20px] saturate-50 drop-shadow-xl   "
            src={product.images[1]}
            alt=""
          />

          {!product.images[1] && (
            <article className="w-full bg-slate-800 animate-pulse rounded-[20px] max-h-[250px]  max-w-[200px] min-h-[250px] min-w-[200px] flex justify-center">
              <img
                className=""
                src="data:image/png;base64,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"
                alt=""
              />
            </article>
          )}
        </div>

        <div className="">
          <p className="flex justify-center  hover:text-slate-100 hover:font-medium text-start">
            {" "}
            {product.description}{" "}
          </p>
        </div>
      </div>
    </article>
  );
}
