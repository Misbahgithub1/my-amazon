import Image from "next/image";
import React, { useEffect } from "react";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";
import { BiCaretDown } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "../../../type";
import { useSession, signIn } from "next-auth/react";
import { addUser } from "@/store/nextSlice";

const Header = () => {
  const { data: session } = useSession();
  const { productData, favoriteData, userInfo } = useSelector(
    (state: StateProps) => state.next
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    }
  }, [session]);

  return (
    <div className="w-full h-20 bg-amazon_blue text-lightText top-0 sticky z-50">
      <div className="w-full mx-auto h-full inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
        {/* LOGO */}
        <Link
          href={"/"}
          className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]"
        >
          <Image
            className="object-contain mt-1"
            src="/images/logo.png"
            alt="logo"
            width={120}
            height={50}
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
        {/* DELIVERY */}
        <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%] xl:inline-flex gap-1">
          <SlLocationPin />
          <div className="text-xs">
            <p>Deliver to</p>
            <p className="text-white font-bold uppercase">USA</p>
          </div>
        </div>
        {/* SEARCH BAR */}
        <div className="flex-1 items-center justify-between h-10 md:inline-flex relative hidden">
          <input
            className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-transparent border-[3px] outline-none focus:border-amazon_yellow"
            type="text"
            placeholder="Search amazon products"
          />
          <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
            <HiOutlineSearch />
          </span>
        </div>

        {/* SIGN IN */}
        {userInfo ? (
          <div className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] gap-1">
            <img
              src={userInfo.image}
              alt="userImage"
              className="w-8 h-8 rounded-full object-cover"
            />

            <div className="flex flex-col text-xs text-gray-100 justify-between">
              <p className="font-bold">{userInfo.name}</p>
              <p>{userInfo.email}</p>

            </div>
          </div>
        ) : (
          <div
            onClick={() => signIn()}
            className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%] xl:inline-flex gap-1"
          >
            <div className="text-xs">
              <p>Hello, sign in</p>
              <p className="text-white font-bold flex items-center justify-center">
                Account & Lists
                <span>
                  <BiCaretDown />
                </span>
              </p>
            </div>
          </div>
        )}
        {/* FAVORITE */}
        <div className="text-xs flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer text-gray-100 duration-300 h-[70%] relative">
          <p>Marked</p>
          <p className="text-white font-bold">& Favorite</p>
          {favoriteData.length > 0 && (
            <span className="absolute right-0 top-2 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-amazon_yellow">
              {favoriteData.length}
            </span>
          )}

          {/* <span>{favoriteData.length}</span> */}
        </div>
        {/* CART */}
        <Link
          href={"/cart"}
          className="text-xs px-2 flex items-center border border-transparent cursor-pointer text-gray-100 duration-100 hover:text-amazon_yellow"
        >
          <span className="text-3xl">
            {" "}
            <AiOutlineShoppingCart />
          </span>

          <span className="absolute top-3 right-4 text-md bg-red-600 rounded-full w-5 h-5 text-center items-center justify-center flex text-white">
            {productData ? productData.length : 0}
          </span>
        </Link>
        {/* ENDS */}
      </div>
    </div>
  );
};

export default Header;
