import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import PublicComponent from "core/layouts/public/public.component";
import AuthComponent from "core/layouts/auth/auth.component";
import AuthProtectedComponent from "./protected/auth-protected.component";
import HomeComponent from "pages/home/home.component";
import FormComponent from "pages/form/form.component";
import NotFound from "pages/not-found/notfound.component";
import LoginComponent from "pages/login/login.component";
import BlogComponent from "pages/blog/blog.componet";
import ContactComponent from "pages/contact/contact.component";
import DocsComponent from "pages/docs/docs.component";
import NewsComponent from "pages/news/news.component";
import AccountComponent from "pages/account/account.component";
import TableComponent from "pages/table/table.component";
import UserComponent from "pages/user/users.component";

const router = createBrowserRouter(
  [
    {
      element: (
        <AuthProtectedComponent layout="public">
          <PublicComponent />
        </AuthProtectedComponent>
      ),
      children: [
        {
          path: Routes.home,
          element: <HomeComponent />,
        },
        {
          path: Routes.form,
          element: <FormComponent />,
        },
        {
          path: Routes.users,
          element: <UserComponent />,
        },
        {
          path: Routes.table,
          element: <TableComponent />,
        },
        {
          path: Routes.news,
          element: <NewsComponent />,
        },
        {
          path: Routes.docs,
          element: <DocsComponent />,
        },
        {
          path: Routes.blog,
          element: <BlogComponent />,
        },
        {
          path: Routes.contact,
          element: <ContactComponent />,
        },
        {
          path: Routes.account,
          element: <AccountComponent />,
        },

      ],
    },
    {
      path: Routes.auth,
      element: (
        <AuthProtectedComponent layout="auth">
          <AuthComponent />
        </AuthProtectedComponent>
      ),
      children: [
        {
          path: Routes.login,
          element: <LoginComponent />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  { basename: "/" }
);

export default router;
