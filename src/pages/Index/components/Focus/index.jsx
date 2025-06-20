import React from "react";
import style from "./index.module.less";
import iicon from "@/assets/image/iicon.png";
import aicon from "@/assets/image/aicon.png";
import { RightOutlined } from "@ant-design/icons";
import tlpImg from "@/assets/image/tlp.webp";
import icon3 from "@/assets/image/icon3.png";
import p1 from "@/assets/image/p1.svg";
import p2 from "@/assets/image/p2.svg";
import p3 from "@/assets/image/p3.svg";
import p4 from "@/assets/image/p4.svg";
import p5 from "@/assets/image/p5.svg";
import { isMobileDevice } from "@/utils";

import p6 from "@/assets/image/p6.svg";
import p7 from "@/assets/image/p7.svg";
import { Flex } from "antd";
import { useTranslation } from "react-i18next";

// 测试data
const testData = [
  {
    url: p7,
    name: "BTC",
    price: "$9170.3",
    rate: "+12.16",
  },
  {
    url: p2,
    name: "ETH",
    price: "$2292.55",
    rate: "+2.99",
  },
  {
    url: p3,
    name: "ONDO",
    price: "$9170.3",
    rate: "+3.11",
  },
  {
    url: p4,
    name: "HIPPOP",
    price: "$0.000534.3",
    rate: "+0.46",
  },
  {
    url: p5,
    name: "GT",
    price: "$1.912123",
    rate: "+3.21",
  },
  {
    url: p6,
    name: "PI",
    price: "$0.3",
    rate: "-99.16",
  },
  {
    url: p1,
    name: "XRP",
    price: "$2.703",
    rate: "+23.16",
  },
  {
    url: p5,
    name: "ADA",
    price: "2.3323",
    rate: "-2.16",
  },
];
export default function Focus() {
  const { t } = useTranslation();
  const getColorClassName = (rate) => {
    const sign = rate.charAt(0);
    return sign === "-"
      ? style.negRate
      : sign === "+"
        ? style.posRate
        : style.zeroRate;
  };
  return (
    <div className={style.focusContainer}>
      <div className={style.main}>
        {/* 主题字 */}
        <div className={style.title}>{t("focus.title")}</div>
        {/* 副标题 */}
        <div className={style.text}>{t("focus.description_1")}</div>
        <div className={style.downloadApkContainer}>
          <div className={style.downloadApk}>
            <img src={iicon} alt="IOS" className={style.apkIcon} />
            <div className={style.downloadApkText}>
              <p>{t("download.downloadOnThe")}</p>
              <p>{t("download.appStore")}</p>
            </div>
          </div>
          <div className={style.downloadApk}>
            <img src={aicon} alt="Android" className={style.apkIcon} />
            <div className={style.downloadApkText}>
              <p>{t("download.downloadAPK")}</p>
              <p>{t("download.android")}</p>
            </div>
          </div>
        </div>
        {/* 手机号/邮箱 */}
        {/* <div className={style.contactBox}>
          <input
            className={style.input}
            type="text"
            placeholder={t('focus.placeholder')}
          />
          <div className={style.button}>{t('focus.startNow')}</div>
        </div> */}
        {/* 第三方/下载方式 */}
        {/* <div className={style.side}>
          <div className={style.share}>
            <header>{t('focus.orContinue')}</header>
            <Flex justify="space-around">
              {sideIcon.map((item, index) => (
                <div className={style.iconBox}>
                  <img src={item} alt="" height={24} />
                </div>
              ))}
            </Flex>
          </div>
          <div className={style.download}>
            <header>{t('focus.download')}</header>
            <div className={style.iconBox}>
              <img src={downloadIcon} height={24} alt="" />
            </div>
          </div>
        </div> */}
      </div>
      {/* 数据组 */}
      {/* {!isMobileDevice() && ( */}
      <div className={style.dataGroup}>
        <div className={style.viewGroup}>
          <img className={style.iconthree} src={icon3} width={100} alt="" />
          <div className={style.newlyListed}>
            <header>{t("focus.newlyListed")}</header>
            {/* <div className={style.text}>00D:02:03:14</div> */}
            <Flex justify="start" align="center" gap={10}>
              <img
                src={tlpImg}
                width={72}
                alt=""
                className={style.newlyListedCoinImage}
              />
              <span className={style.nickname}>
                <span className={style.coin}>TRUMP</span>
                {/* {!isMobileDevice() && <br />} */}
                <span className={style.coinprice}>+100.99%</span>
              </span>
            </Flex>
            <label
              className={`${style.viewcoindetails} hover:!underline !cursor-pointer`}
            >
              {t("focus.view")}
            </label>
          </div>
          <div className={style.tradingVolumeWrapper}>
            <div className={style.tradingVolume}>
              <header>{t("focus.tradingVolume")}</header>
              <div className={style.text}>38.81B</div>
              <label
                className={`${style.viewcoindetails} hover:!underline !cursor-pointer`}
              >
                {t("focus.view")}
              </label>
            </div>
          </div>
        </div>
        {/* 热门 */}
        {!isMobileDevice() && (
          <div className={style.popular}>
            <header>{t("focus.popular")}</header>
            <div className={style.binList}>
              {testData.map((item, index) => (
                <div key={index} className={style.binItem}>
                  {/* 名称和图标 */}
                  <div className={style.title}>
                    <img src={item.url} alt="" />
                    <div className={style.label}>{item.name}</div>
                  </div>
                  <div className={style.data}>
                    <div>{item.price}</div>
                    <div
                      className={`${style.rate} ${getColorClassName(item.rate)}`}
                    >
                      {item.rate}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={style.titleBtn}>
              {t("focus.diTitel")}
              <RightOutlined className={style.icon} />
            </div>
          </div>
        )}
      </div>

      {/* )} */}
    </div>
  );
}
