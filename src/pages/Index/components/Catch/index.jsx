import React from "react";
import style from "./index.module.less";
import vedio from "@/assets/vedio/zhendonghua.mp4";
import { useTranslation } from "react-i18next";

export default function Catch() {
  const { t } = useTranslation();
  const list = [
    {
      title: t('catch.selfHostedWallet'),
      text: t('catch.selfHostedWalletDes'),
    },
    {
      title: t('catch.privacyAndSecurity'),
      text: t('catch.privacyAndSecurityDes'),
    },
    {
      title: t('catch.builtInRiskControls'),
      text: t('catch.builtInRiskControlsDes'),
    },
  ];
  return (
    <div className={style.catchContainer}>
      <div className={style.title}>{t('catch.title')}</div>
      <div className={style.subTitle}>
        {t('catch.subTitle')}
      </div>
      <video
        className={style.video}
        autoPlay
        loop
        muted
        playsInline
        width="580"
      >
        <source src={vedio} type="video/mp4" />
      </video>
      <div className={style.introList}>
        {list.map((item, index) => (
          <div className={style.introItem} key={index}>
            <p className={style.introItemTitle}>{item.title}</p>
            <div className={style.introInfo}>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
