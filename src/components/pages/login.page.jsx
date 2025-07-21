import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <section className="relative h-full w-full flex items-center justify-center flex-col gap-y-3">
      <div className="w-fit h-fit flex items-center justify-center gap-4">
        <h1 className="font-semibold text-2xl">Login</h1>
        <CiLogin className="w-10 h-auto" />
      </div>
      <Link
        to="/app"
        className="border-2 border-dashed p-2 rounded-md hover:bg-gray-100 transition-colors font-semibold"
      >
        Click here to go to the Home
      </Link>
    </section>
  );
};

export { LoginPage };
