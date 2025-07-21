import toast from "react-hot-toast";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const HomePage = () => {
  const makeAToast = () => {
    toast.success("This is a toast message!");
  };

  return (
    <section className="relative h-full w-full flex items-center justify-center flex-col gap-y-3">
      <div className="w-fit h-fit flex items-center justify-center gap-4">
        <h1 className="font-semibold text-2xl">Home</h1>
        <IoHomeOutline className="w-8 h-auto" />
      </div>
      <Link
        to="/"
        className="border-2 border-dashed p-2 rounded-md hover:bg-gray-100 transition-colors font-semibold"
      >
        Click here to go to the Login
      </Link>
      <button
        className="border-2 border-dashed p-2 rounded-md hover:bg-gray-100 transition-colors font-semibold"
        onClick={makeAToast}
      >
        Make a Toast
      </button>
    </section>
  );
};

export { HomePage };
