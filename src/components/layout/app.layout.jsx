import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <main className="relative h-full w-full">
      <Toaster />
      <Outlet />
    </main>
  );
};

export { AppLayout };
