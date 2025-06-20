import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import Loader from "@/components/Loader";
import routes from "@/routes";
import { getHealth } from "./service";
import { ConfigProvider } from "antd";
import { useTranslation } from "react-i18next";
import { HelmetProvider, Helmet } from "react-helmet-async";

export default function App() {
  const test = async () => {
    getHealth();
  };
  const { t } = useTranslation();

  // test()

  return (
    <HelmetProvider>
      <Helmet>
        <title>{t("metadata.title")}</title>
        <meta
          name="description"
          content="Token 13 Wallet is the simplest, most secure way to store, purchase, and exchange on the Algorand blockchain. It can discover and connect to decentralized applications (DApps) on any device."
        />
      </Helmet>
      <Suspense
        fallback={
          <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
            <Loader />
          </div>
        }
      >
        <ConfigProvider
          theme={{
            components: {
              Typography: {
                fontWeightStrong: 500,
              },
            },
          }}
        >
          <RouterProvider router={routes} />
        </ConfigProvider>
      </Suspense>
    </HelmetProvider>
  );
}
