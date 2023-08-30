import Image from "next/image";
import React from "react";
import FormattedPrice from "./FormattedPrice";
import { LuMinus, LuPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { decreaseQty, deleteProduct, increaseQty } from "@/store/nextSlice";
interface Item {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
  quantity: number;
}

interface CartProductProps {
  item: Item;
}

const CartProduct = ({ item }: CartProductProps) => {

const dispatch = useDispatch();


  return (
    <div className="bg-gray-200 rounded-lg flex items-center gap-4">
      <Image
        className="object-cover"
        src={item.image}
        alt="productImage"
        width={150}
        height={150}
      />

      <div className="flex items-center px-2 gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold text-amazon_blue">{item.title}</p>
          <p className="text-sm text-gray-600">{item.description}</p>
          <p className="text-sm text-gray-500">
            Unit Price{" "}
            <span className="font-semibold text-amazon_blue">
              <FormattedPrice amount={item.price} />
            </span>
          </p>

          {/* PLUS MINUS */}

          <div className="flex items-center gap-6">
            <div className="flex items-center mt-1 justify-between border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300">
              <span onClick={()=>dispatch(increaseQty({
                 _id: item._id,
                 brand: item.brand,
                 category: item.category,
                 image: item.image,
                 description: item.description,
                 isNew: item.isNew,
                 oldPrice: item.oldPrice,
                 price: item.price,
                 title: item.title,
                 quantity: 1,
              }))} className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer duration-300">
                <LuPlus />
              </span>
              <span>{item.quantity}</span>
              <span onClick={()=>dispatch(decreaseQty({
                 _id: item._id,
                 brand: item.brand,
                 category: item.category,
                 image: item.image,
                 description: item.description,
                 isNew: item.isNew,
                 oldPrice: item.oldPrice,
                 price: item.price,
                 title: item.title,
                 quantity: 1,
              }))} className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-red-300 cursor-pointer duration-300">
                <LuMinus />
              </span>
            </div>

            {/* DELETE BUTTON */}

            <div onClick={()=>dispatch(deleteProduct(item._id))} className="flex items-center text-sm gap-1 text-gray-400 hover:text-red-500 cursor-pointer font-medium duration-300">
              <IoMdClose /> <span >Remove</span>
            </div>
            {/* DELETE BUTTON */}
          </div>

          {/* PLUS MINUS */}
        </div>


        {/* SUBTOTAL PRICE */}
        <div className="text-lg font-semibold text-amazon_blue">
          <FormattedPrice amount={item.price * item.quantity} />
        </div>
        {/* SUBTOTAL PRICE */}


      </div>
    </div>
  );
};

export default CartProduct;
