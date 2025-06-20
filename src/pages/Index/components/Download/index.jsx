import React from "react";
import style from "./index.module.less";
import iphone from "@/assets/image/iPhone.webp";
import QR from "@/assets/image/QR.webp";
import iicon from "@/assets/image/iicon.png";
import aicon from "@/assets/image/aicon.png";
import { useTranslation } from "react-i18next";
export default function Download() {
  const { t } = useTranslation();
  return (
    <div className={style.downloadContainer}>
      <div className={style.title}>{t("download.title")}</div>

      <div className={style.boxContainer}>
        <img
          src={iphone}
          alt="App Preview"
          className={style.iphone}
          width={310}
          height={310}
        />

        {/* 右侧 - 下载区域 */}
        <div className={`flex flex-col items-start justify-center gap-11 md:gap-[74px] ${style.downloadSectionContainer}`}>
          <div className={style.downloadSection}>
            {/* 二维码 */}
            <img src={QR} alt="QR Code" className={style.qrCode} />

            {/* 下载说明文本 */}
            <div className={style.downloadText}>
              <p className="m-0 text-white text-[12px] font-light opacity-60 not-italic">
                {t("download.scanToDownload")}
              </p>
              <p className="text-[14px] md:!text-base">
                {t("download.iosAndAndroid")}
              </p>
            </div>
          </div>
          <div className={style.downloadApkContainer}>
            <div className={style.downloadApk}>
              <img src={iicon} alt="IOS" className={style.apkIcon} />
              <div className={style.downloadApkText}>
                <p className={style.downloadText}>
                  {t("download.downloadOnThe")}
                </p>
                <p className={style.downloadStore}>{t("download.appStore")}</p>
              </div>
            </div>
            <div className={style.downloadApk}>
              <img src={aicon} alt="Android" className={style.apkIcon} />
              <div className={style.downloadApkText}>
                <p className={style.downloadText}>
                  {t("download.downloadAPK")}
                </p>
                <p className={style.downloadStore}>{t("download.android")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
