import style from "./index.module.less";
import { useNavigate } from "react-router-dom";
import ContactUs from "@/components/Contact";
import { isMobileDevice } from "@/utils";
import { Card, Flex, Typography, Row, Col, ConfigProvider } from "antd";
const { Title, Text } = Typography;
import { useTranslation } from "react-i18next";
import Icon from "@/assets/icon/icon-download-line.svg";
import quotes from "@/assets/image/quotes.png";

export default function AboutUs() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  const cardData = [
    {
      title: t("aboutUs.title6"),
      description: t("aboutUs.description8"),
    },
    {
      title: t("aboutUs.title7"),
      description: t("aboutUs.description9"),
    },
    {
      title: t("aboutUs.title8"),
      description: t("aboutUs.description10"),
    },
  ];
  return (
    <>
      <div className={style.aboutUsContainer}>
        <div className={style.aboutUsContent}>
          <Flex
            className={style.aboutUsTop}
            wrap={isMobileDevice() ? "wrap" : undefined}
          >
            <Flex
              justify="start"
              vertical="column"
              className={style.aboutUsLeft}
            >
              <Title
                className={style.aboutUsTitle}
                style={{ fontSize: "48px" }}
              >
                {t("aboutUs.title")}
              </Title>
              <Text className={style.aboutUsSubtitle}>
                {t("aboutUs.subTitle")}
              </Text>
              <Text
                className={style.aboutUsSubtitle}
                style={{ marginTop: 0, marginBottom: "36px" }}
              >
                {t("aboutUs.third")} <br />
                {t("aboutUs.title1")}
                {t("aboutUs.description1")} <br />
                {t("aboutUs.title2")}
                {t("aboutUs.description1")} <br />
                {t("aboutUs.title3")}
                {t("aboutUs.description1")} <br />
                {t("aboutUs.title4")}
                {t("aboutUs.description1")} <br />
              </Text>
            </Flex>
            <Flex className={style.aboutUsRight}>
              <div className={style.aboutUsRightContent}>
                <Text className={style.rightTitle}>
                  {t("aboutUs.description5")}
                </Text>
                <Text className={style.rightSubtitle}>
                  {t("aboutUs.description6")}
                </Text>
                <button
                  className={style.explorenow}
                  onClick={() => handleClick("/")}
                >
                  <span> {t("aboutUs.description7")}</span>
                  <img width={10} src={Icon} alt="explorenow" />
                </button>
              </div>
            </Flex>
          </Flex>
        </div>
        <div className={style.aboutUsContent}>
          <Flex>
            <Title className={style.missionVisionTitle}>
              {t("aboutUs.title5")}
            </Title>
          </Flex>
          <Row gutter={[16, 16]} justify="center">
            {cardData.map((item, index) => (
              <Col key={index} lg={8} md={12} sm={24} className={style.cardCol}>
                <Card
                  className={style.card}
                  style={{
                    width: "100%",
                    borderRadius: "24px",
                    borderWidth: "1px",
                    padding: "0",
                    gap: "24px",
                    background:
                      "linear-gradient(135deg, #282B37 0%, #000000 100%)",
                    border: "1px solid",
                    borderImageSource:
                      "linear-gradient(0deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.06))",
                    color: "white",
                    textAlign: "left",
                    minHeight: "260px",
                  }}
                >
                  <img className={style.quotes} src={quotes} alt="quotes" />
                  <Title
                    className={style.missionCardTitle}
                    style={{
                      color: "white",
                      marginTop: "10px",
                      fontSize: isMobileDevice() ? "16px" : "24px",
                      lineHeight: "24px",
                      marginBottom: "24px",
                    }}
                  >
                    {item.title}
                  </Title>
                  <Text
                    className={style.missionCardDescription}
                    style={{
                      color: "rgba(255, 255, 255, 0.4)",
                      lineHeight: "20px",
                      fontSize: isMobileDevice() ? "14px" : "16px",
                    }}
                  >
                    {item.description}
                  </Text>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <ContactUs />
      </div>
    </>
  );
}
