import React from "react";
import style from "./index.module.less";
import { Typography, Row, Col } from "antd";
import { isMobileDevice } from "@/utils";
import Contact from "@/assets/icon/contact.svg";
import Service from "@/assets/icon/service.svg";
import { useTranslation } from "react-i18next";

const { Title, Text } = Typography;

const ContactUs = () => {
  const { t } = useTranslation();

  const contactData = [
    {
      icon: <img src={Service} alt="service" />,
      title: t("aboutUs.ab2"),
      email: "support@token13.net",
    },
    {
      icon: <img src={Contact} alt="contact" />,
      title: t("aboutUs.ab3"),
      email: "hr@token13.info",
    },
  ];

  return (
    <div className={style.box}>
      <Title level={2} className={style.aboutContact}>
        {t("aboutUs.ab1")}
      </Title>
      <div
        className={style.cContainer}
        style={{ textAlign: "center", padding: "50px 0" }}
      >
        <div className={style.contactMethods}>
          {contactData.map((item, index) => (
            <Col
              key={index}
            >
              <div
                className={style.cdiv}
                onClick={() => (window.location.href = `mailto:${item.email}`)} // 点击整个区域都可跳转邮箱
                style={{
                  cursor: "pointer",
                  height: isMobileDevice() ? "auto" : "82px",
                  padding: isMobileDevice() ? "8px 0" : "0px",
                }} // 让鼠标显示可点击
              >
                <div className="w-10 h-10">{item.icon}</div>

                <div className={style.ccon}>
                  <Title
                    level={3}
                    style={{
                      color: "white",
                      marginBottom: "0",
                      marginTop: "0",
                      fontSize: isMobileDevice() ? "14px" : "20px",
                    }}
                  >
                    {item.title}
                  </Title>
                  <Text>
                    <a
                      href={`mailto:${item.email}`}
                      style={{
                        color: "#ddd",
                        textDecoration: "none",
                        fontSize: isMobileDevice() ? "12px" : "16px",
                        opacity: 0.8,
                      }}
                    >
                      {item.email}
                    </a>
                  </Text>
                </div>
              </div>
            </Col>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
