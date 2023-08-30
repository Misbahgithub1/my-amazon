import { resetCart } from "@/store/nextSlice";
import { useDispatch } from "react-redux";

const ResetCart = () => {
  const dispatch = useDispatch();
  const handleCartReset = () => {
    const confirmReset = window.confirm(
      "Are you sure to reset your items from the cart?"
    );
    if (confirmReset) {
      dispatch(resetCart());
    }
  };
  return (
    <>
      <button
        onClick={handleCartReset}
        className="w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300 cursor-pointer"
      >
        Reset Cart
      </button>
    </>
  );
};

export default ResetCart;
