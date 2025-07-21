import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthenticationLayout } from "../components/layout/authentication.layout";
import { AppLayout } from "../components/layout/app.layout";
import { AuthenticationRoutes } from "./authentication.routes";
import { AppRoutes } from "./app.routes";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthenticationLayout />}>
          {AuthenticationRoutes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={route.element}
                index={route.index}
              />
            );
          })}
        </Route>
        <Route path="/app" element={<AppLayout />}>
          {AppRoutes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={route.element}
                index={route.index}
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { MainRoutes };
