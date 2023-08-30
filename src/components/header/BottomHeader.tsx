import { LuMenu } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "../../../type";
import { removeUser } from "@/store/nextSlice";
import { signOut } from "next-auth/react";

const BottomHeader = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: StateProps) => state.next);

  const handleSignOut = async () => {
    await signOut(); // Make sure to await the signOut function
    dispatch(removeUser());
  };

  return (
    <div className="w-full h-10 bg-amazon_light text-white text-sm px-4 flex items-center">
      <p className="h-8 border border-transparent hover:border-white cursor-pointer flex items-center gap-1 duration-300 px-2">
        <LuMenu className="text-xl" />
        All
      </p>

      <p className="hidden md:inline-flex h-8 border border-transparent hover:border-white cursor-pointer items-center duration-300 px-2">
        Todays Deals
      </p>

      <p className="hidden md:inline-flex h-8 border border-transparent hover:border-white cursor-pointer items-center duration-300 px-2">
        Customer Service
      </p>

      <p className="hidden md:inline-flex h-8 border border-transparent hover:border-white cursor-pointer items-center duration-300 px-2">
        Gift Cards
      </p>

      <p className="hidden md:inline-flex h-8 border border-transparent hover:border-white cursor-pointer items-center duration-300 px-2">
        Registry
      </p>

      <p className="hidden md:inline-flex h-8 border border-transparent hover:border-white cursor-pointer items-center duration-300 px-2">
        Sell
      </p>

      {userInfo && (
        <button
          onClick={handleSignOut}
          className="hidden md:inline-flex h-8 border border-transparent hover:border-red-600 hover:text-red-600 cursor-pointer items-center duration-300 px-2 text-amazon_yellow"
        >
          Sign out
        </button>
      )}
    </div>
  );
};

export default BottomHeader;
