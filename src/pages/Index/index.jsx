import React from "react";
import Focus from "./components/Focus";
import style from "./index.module.less";
import Introduce from "./components/Introduce";
import CryptoData from "./components/CryptoData";
import { ConfigProvider } from "antd";
import Catch from "./components/Catch";
import Download from "./components/Download";
import Question from "./components/Question";
export default function Index() {
  return (
    <>
      <div className={style.homeContainer}>
        {/* 主体焦点区域 */}
        <Focus />
        {/* 介绍 */}
        <Introduce />
        <ConfigProvider
          theme={{
            components: {
              Tabs: {
                itemColor: "#888", // 未选中 Tab 颜色
                itemSelectedColor: "#ffffff", // 选中 Tab 颜色
                itemHoverColor: "#ffffff", // 悬停颜色
                inkBarColor: "#ffffff", // 选中下划线颜色
                inkBarHeight: 4, // 选中下划线高度（单位 px）
              },
            },
          }}
        >
          <CryptoData />
        </ConfigProvider>
        <Catch />
        <Download />
        <Question />
      </div>
    </>
  );
}
