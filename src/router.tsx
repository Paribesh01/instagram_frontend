import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./routes/Root";
import { LoginPage } from "./routes/auth/login";
import { SignupPage } from "./routes/auth/signup";
import { Protected } from "./util/Protected";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <Protected>
            <Root />
          </Protected>
        }
      />
    </>
  )
);
