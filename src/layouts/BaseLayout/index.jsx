import React from "react";
import style from "./index.module.less";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

export default function BaseLayout() {
  return (
    <div className={style.layoutContainer}>
      <Navbar />
      <div className={style.layoutContent}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
