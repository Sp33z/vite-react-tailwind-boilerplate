import { Outlet } from "react-router-dom";

const AuthenticationLayout = () => {
  return (
    <main className="relative w-full h-full">
      <Outlet />
    </main>
  );
};

export { AuthenticationLayout };
