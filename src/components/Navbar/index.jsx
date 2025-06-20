import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Drawer, Collapse } from "antd";
import Logo from "./components/Logo/Logo";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import style from "./index.module.less";
// import menu1 from "@/assets/icon/menu1.svg";
import menu2 from "@/assets/icon/menu2.svg";
// import menu3 from "@/assets/icon/menu3.svg";
// import searchIcon from "@/assets/icon/search.svg";
import { isMobileDevice } from "@/utils";
import { NavLink } from "react-router-dom";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  const [visible, setVisible] = useState(false);

  // 菜单项及其对应的路由
  const menuList = [
    { label: t("menu.home"), path: "/" },
    { label: t("menu.joinUs"), path: "/join-us" },
    { label: t("footer.aboutUs"), path: "/about-us" },
    { label: t("footer.termOfService"), path: "/user-agreement" },
    { label: t("footer.privacyProtection"), path: "/privacy-protection" },
  ];

  const MenuItem = ({ path, label }) => (
    <NavLink
      to={path}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        closeDrawer();
      }}
      className={({ isActive }) =>
        `${style.menuItem} ${isActive ? style.active : ""}`
      }
    >
      {label}
    </NavLink>
  );

  const accordionList = [
    {
      key: 1,
      label: t("footer.about"),
      children: menuList
        .filter((item) => item.path !== "/")
        .map((item, index) => (
          <MenuItem key={index} label={item.label} path={item.path} />
        )),
    },
  ];

  const changeLanguage = () => {
    const lng = language === "en" ? "zh" : "en";
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setLanguage(lng);
  };

  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  const customExpand = ({ isActive }) => (
    <span className={style.expandIcon}>
      {isActive ? <UpOutlined /> : <DownOutlined />}
    </span>
  );

  return (
    <div className={style.menuContainer}>
      {/* <div className={style.mobileMenuIcon} onClick={showDrawer}>
        <MenuOutlined style={{ fontSize: "24px", color: "#fff" }} />
      </div> */}
      <div className={style.contentContainer}>
        <div className="flex gap-10">
          <Logo closeDrawer={closeDrawer} />
          <div className={style.menuList}>
            {menuList.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                data-text={item.label}
                className={({ isActive }) =>
                  `${style.menuItem} ${style.menuItemLg} ${isActive ? style.active : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
        <div
          className={style.mobileMenuIcon}
          onClick={visible ? closeDrawer : showDrawer}
        >
          {visible ? (
            <CloseOutlined
              style={{ fontSize: "24px", color: "#fff", cursor: "pointer" }}
            />
          ) : (
            <MenuOutlined
              style={{ fontSize: "24px", color: "#fff", cursor: "pointer" }}
            />
          )}
        </div>

        {!isMobileDevice() && (
          <div className={style.functionBarList}>
            <div className={style.iconList}>
              <img
                src={menu2}
                style={{ cursor: "pointer" }}
                alt=""
                onClick={changeLanguage}
              />
            </div>
          </div>
        )}

        <Drawer
          title="Menu"
          placement="right"
          onClose={closeDrawer}
          open={visible}
          classNames={style.mobileDrawer}
        >
          <div className={`${style.menuList} ${style.mobileDrawerMenuList}`}>
            <div
              className="py-3"
              style={{
                margin: "10px 0 24px 0",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                changeLanguage();
                closeDrawer(); // optional
              }}
            >
              <img
                src={menu2}
                alt="Change Language"
                style={{ marginRight: "8px" }}
              />
              <span style={{ fontSize: "14px", color: "#FFFFFF" }}>
                {language === "en" ? "English" : "简体中文"}
              </span>
            </div>
            {/* <MenuItem label={t("menu.home")} path={"/"} /> */}
            <Collapse
              defaultActiveKey={["1"]}
              expandIcon={customExpand}
              ghost
              items={accordionList}
              className="accordion"
            />
          </div>
        </Drawer>
      </div>
    </div>
  );
}
