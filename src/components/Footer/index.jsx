import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.less";
import { useTranslation } from "react-i18next";
import QRCode from "@/assets/image/google.png";
import { Select } from "antd";
import { isMobileDevice } from "@/utils";
import Logo from "../Navbar/components/Logo/Logo";
import { Collapse } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import menu2 from "@/assets/icon/menu2.svg";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  const footerData = {
    about: {
      key: "about",
      title: t("footer.about"),
      items: [
        { name: t("menu.joinUs"), link: "/join-us" },
        { name: t("footer.aboutUs"), link: "/about-us" },
        { name: t("footer.termOfService"), link: "/user-agreement" },
        { name: t("footer.privacyProtection"), link: "/privacy-protection" },
      ],
    },
    // product: {
    //   key: "product",
    //   title: t("footer.product"),
    //   items: [
    //     { name: t("footer.quickBuyCoins"), link: "#" },
    //     { name: t("footer.swap"), link: "#" },
    //     { name: t("footer.transaction"), link: "#" },
    //     { name: t("footer.web3Wallet"), link: "#" },
    //     { name: t("footer.web3Market"), link: "#" },
    //     { name: t("footer.digitalCurrencyCalculator"), link: "#" },
    //     { name: t("footer.browseAllDigitalCurrencies"), link: "#" },
    //     { name: t("footer.noviceAcademy"), link: "#" },
    //   ],
    // },
    // service: {
    //   key: "service",
    //   title: t("footer.service"),
    //   items: [
    //     { name: t("footer.api"), link: "#" },
    //     { name: t("footer.historicalMarketData"), link: "#" },
    //     { name: t("footer.feeRateStandard"), link: "#" },
    //     { name: t("footer.coinApplication"), link: "#" },
    //     { name: t("footer.helpCenter"), link: "#" },
    //     { name: t("footer.officialVerification"), link: "#" },
    //     { name: t("footer.notice"), link: "#" },
    //   ],
    // },
    // buyCoins: {
    //   key: "buyCoins",
    //   title: t("footer.buyCoins"),
    //   items: [
    //     { name: t("footer.purchaseUSDC"), link: "#" },
    //     { name: t("footer.purchaseTether"), link: "#" },
    //     { name: t("footer.purchaseBitcoin"), link: "#" },
    //     { name: t("footer.purchaseEthereum"), link: "#" },
    //     { name: t("footer.purchaseADA"), link: "#" },
    //     { name: t("footer.purchaseSolana"), link: "#" },
    //     { name: t("footer.purchaseMATIC"), link: "#" },
    //     { name: t("footer.purchaseLitecoin"), link: "#" },
    //     { name: t("footer.purchaseXRP"), link: "#" },
    //   ],
    // },
    // transaction: {
    //   key: "transaction",
    //   title: t("footer.transaction"),
    //   items: [
    //     { name: t("footer.btcUSDC"), link: "#" },
    //     { name: t("footer.ethUSDC"), link: "#" },
    //     { name: t("footer.btcUSDT"), link: "#" },
    //     { name: t("footer.ethUSDT"), link: "#" },
    //     { name: t("footer.maticUSDT"), link: "#" },
    //     { name: t("footer.ltcUSDT"), link: "#" },
    //     { name: t("footer.solUSDT"), link: "#" },
    //     { name: t("footer.xrpUSDT"), link: "#" },
    //   ],
    // },
  };

  const customExpand = ({ isActive }) => (
    <span className={styles.expandIcon}>
      {isActive ? <UpOutlined /> : <DownOutlined />}
    </span>
  );

  const handleNavigation = (path) => {
    // navigate(path);
    if (path !== "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  const collapseKeys = Object.values(footerData).map((section) => section.key);

  const changeLanguage = (value) => {
    i18n.changeLanguage(value);
    localStorage.setItem("language", value);
    setLanguage(value);
  };

  return (
    <footer className={`${styles.footer}`}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {!isMobileDevice() && (
            <div className={styles.qrSection}>
              <h3 className={styles.qrHeading}>{t("footer.title")}</h3>
              <img
                src={QRCode}
                alt="Download QR Code"
                className={styles.qrCode}
              />
              <div className={styles.scanText}>
                {t("footer.scanToDownload")}
              </div>
              <Select
                defaultValue={language}
                className={styles.select}
                onChange={changeLanguage}
                options={[
                  {
                    value: "en",
                    label: (
                      <div className="flex gap-2">
                        <img
                          src={menu2}
                          className="cursor-pointer w-4"
                          alt="language"
                        />
                        {t("footer.english")}
                      </div>
                    ),
                  },
                  {
                    value: "zh",
                    label: (
                      <div className="flex gap-2">
                        <img
                          src={menu2}
                          className="cursor-pointer w-4"
                          alt="language"
                        />
                        {t("footer.chinese")}
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          )}

          <div className={styles.collapseContainer}>
            <div className={styles.mdLogoContainer}>
              <Logo />
            </div>
            <Collapse
              defaultActiveKey={"about"} //use collapseKeys to open all sections
              expandIcon={customExpand}
              expandIconPosition="end"
              className={styles.customCollapse}
              items={Object.values(footerData).map((section) => ({
                key: section.key,
                label: section.title,
                className: styles.customPanel,
                children: (
                  <div className={styles.navSection}>
                    <ul className={styles.navList}>
                      {section.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.link}
                            className={styles.navButton}
                            onClick={() => handleNavigation(item.link)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ),
              }))}
            />
            <div className={styles.quickLinks}>
              {Object.values(footerData).map((section) => (
                <div key={section.key} className={styles.navSection}>
                  <h3>{section.title}</h3>
                  <ul className={styles.navList}>
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.link}
                          className={styles.navButton}
                          onClick={() => handleNavigation(item.link)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-[26px] pb-3 md:mt-[80px] md:pb-[20px]">
          <p className="text-center text-xs md:text-sm font-light text-[#999999] ">
            Token 13 © 2025.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
