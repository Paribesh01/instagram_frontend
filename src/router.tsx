import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./routes/Root";
import { LoginPage } from "./routes/auth/login";
import { SignupPage } from "./routes/auth/signup";
import { Protected } from "./util/Protected";
import { EditProfilePage } from "./routes/profile/editProfile";
import { CreatePostPage } from "./routes/post/CreatePost";
import { Posts } from "./routes/post/Posts";
import { ProfilePage } from "./routes/profile/profile";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/profile"
        element={
          <Protected>
            <ProfilePage />
          </Protected>
        }
      />
      <Route
        path="/"
        element={
          <Protected>
            <Root />
          </Protected>
        }
      />
      <Route
        path="/editProfile"
        element={
          <Protected>
            <EditProfilePage />
          </Protected>
        }
      />
      <Route
        path="/fullPost/:id"
        element={
          <Protected>
            <Posts />
          </Protected>
        }
      />
      <Route
        path="/createPost"
        element={
          <Protected>
            <CreatePostPage />
          </Protected>
        }
      />
    </>
  )
);
