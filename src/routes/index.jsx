import { createBrowserRouter } from "react-router-dom";
import React from "react";
import BaseLayout from "@/layouts/BaseLayout";
import NotFound from "@/pages/404/404";
import { lazyLoad } from "@/utils";
import { URLS } from "./urls";

const Index = lazyLoad(() => import("../pages/Index/index.jsx"));
const JoinUs = lazyLoad(() => import("../pages/JoinUs/index.jsx"));
const AboutUs = lazyLoad(() => import("../pages/AboutUs/index.jsx"));
const UserAgreement = lazyLoad(
  () => import("../pages/UserAgreement/index.jsx")
);
const PrivacyProtection = lazyLoad(
  () => import("../pages/PrivacyProtection/index.jsx")
);

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: URLS.joinUs,
        element: <JoinUs />,
      },
      {
        path: URLS.aboutUs,
        element: <AboutUs />,
      },
      {
        path: URLS.UserAgreement,
        element: <UserAgreement />,
      },
      {
        path: URLS.PrivacyProtection,
        element: <PrivacyProtection />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
