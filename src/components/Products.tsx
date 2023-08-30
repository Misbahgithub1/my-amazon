import React from "react";
import { ProductProps } from "../../type";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import FormattedPrice from "./FormattedPrice";
import { useDispatch } from "react-redux";
import { addToCart, addToFavorite } from "@/store/nextSlice";

const Products = ({ productData }: any) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 my-6">
      {productData.map(
        ({
          _id,
          title,
          brand,
          category,
          description,
          image,
          isNew,
          oldPrice,
          price,
        }: ProductProps) => (
          <div
            key={_id}
            className="w-full bg-white text-black border border-gray-300 p-4 rounded-lg group"
          >
            <div className="w-full h-[260px] relative overflow-hidden">
              <Image
                className="w-full h-full object-cover scale-90 hover:scale-105 transition-transform duration-300 "
                src={image}
                alt="productImage"
                width={300}
                height={300}
              />
              <div onClick={() =>
                  dispatch(
                    addToCart({
                      _id: _id,
                      brand: brand,
                      category: category,
                      image: image,
                      description: description,
                      isNew: isNew,
                      oldPrice: oldPrice,
                      price: price,
                      title: title,
                      quantity: 1,
                    })
                  )
                } className="w-12 h-24 absolute bottom-10 right-0 border-[1px] bg-white border-gray-400 flex flex-col rounded-md translate-x-20 group-hover:translate-x-0 duration-300 transition-transform">
                <span className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center bg-transparent hover:bg-amazon_yellow text-xl cursor-pointer duration-300">
                  <HiShoppingCart />
                </span>
                <span onClick={() =>
                  dispatch(
                    addToFavorite({
                      _id: _id,
                      brand: brand,
                      category: category,
                      image: image,
                      description: description,
                      isNew: isNew,
                      oldPrice: oldPrice,
                      price: price,
                      title: title,
                      quantity: 1,
                    })
                  )
                }  className="w-full h-full border-b-[1px] flex items-center justify-center bg-transparent hover:bg-amazon_yellow text-xl cursor-pointer duration-300">
                  <FaHeart />
                </span>
              </div>
              {isNew && (
                <p className="absolute top-0 right-0 text-amazon_blue font-medium text-xs animate-pulse">
                  !save <FormattedPrice amount={oldPrice - price} />{" "}
                </p>
              )}
            </div>
            <hr />
            <div className="px-4 py-3 flex flex-col gap-1">
              <p className="text-xs text-gray-500 tracking-wide">{category}</p>
              <p className="text-base font-medium">{title}</p>
              <p className="flex items-center gap-2">
                <span className="text-sm line-through">
                  <FormattedPrice amount={oldPrice} />
                </span>

                <span className="text-amazon_blue font-semibold">
                  <FormattedPrice amount={price} />
                </span>
              </p>

              <p className="text-xs text-gray-600">
                {description.substring(0, 120)}
              </p>

              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      _id: _id,
                      brand: brand,
                      category: category,
                      image: image,
                      description: description,
                      isNew: isNew,
                      oldPrice: oldPrice,
                      price: price,
                      title: title,
                      quantity: 1,
                    })
                  )
                }
                className="text-white bg-amazon_blue font-medium py-2 mt-2 rounded-md hover:bg-amazon_yellow duration-300 hover:text-black"
              >
                Add to cart
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Products;
