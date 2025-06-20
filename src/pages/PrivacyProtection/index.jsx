import style from "./index.module.less";
import { useTranslation } from "react-i18next";
import { Typography } from "antd";
const { Title } = Typography;
export default function PrivacyProtection() {
  const { t } = useTranslation();
  return (
    <>
      <div className={style.privacyProtectionContainer}>
        <div className={style.privacyProtectionContent}>
          <Title className={style.privacyProtectionTitle}>
            {t("privacyProtection.text1")}
          </Title>
          <div className={style.time}>{t("privacyProtection.text2")}</div>
          <div className={style.tip}>{t("privacyProtection.text3")}</div>
          <div className={style.box}>
            <h3>{t("privacyProtection.text4")}</h3>
            <ul style={{ listStyleType: "none" }}>
              <li>{t("privacyProtection.text5")}</li>
              <li>{t("privacyProtection.text6")}</li>
            </ul>
          </div>
          <div className={style.box}>
            <h3>{t("privacyProtection.text7")}</h3>
            <ul style={{ listStyleType: "none" }}>
              <li style={{ fontWeight: 500 }}>
                {t("privacyProtection.text8")}
              </li>
              <li>{t("privacyProtection.text9")}</li>
              <li>{t("privacyProtection.text10")}</li>
              <li>{t("privacyProtection.text11")}</li>
              <li>{t("privacyProtection.text12")}</li>
              <li>{t("privacyProtection.text13")}</li>
            </ul>
          </div>
          <div className={style.box}>
            <h3>{t("privacyProtection.text14")}</h3>
            <ul style={{ listStyleType: "none" }}>
              <li>{t("privacyProtection.text15")}</li>
            </ul>
          </div>
          <div className={style.box}>
            <h3>{t("privacyProtection.text16")}</h3>
            <ul style={{ listStyleType: "none" }}>
              <li style={{ fontWeight: 500 }}>
                {t("privacyProtection.text17")}
              </li>
              <li>{t("privacyProtection.text18")}</li>
              <li style={{ fontWeight: 500 }}>
                {t("privacyProtection.text19")}
              </li>
              <li>{t("privacyProtection.text20")}</li>
              <li style={{ fontWeight: 500 }}>
                {t("privacyProtection.text22")}
              </li>
              <li>{t("privacyProtection.text23")}</li>
            </ul>
          </div>
          <div className={style.box}>
            <h3>{t("privacyProtection.text24")}</h3>
            <ul style={{ listStyleType: "none" }}>
              <li>{t("privacyProtection.text25")}</li>
              <li>{t("privacyProtection.text26")}</li>
            </ul>
          </div>
          <div className={style.box}>
            <h3>{t("privacyProtection.text27")}</h3>
            <ul style={{ listStyleType: "none" }}>
              <li>{t("privacyProtection.text28")}</li>
            </ul>
          </div>
          <div className={style.box}>
            <h3>{t("privacyProtection.text29")}</h3>
            <ul style={{ listStyleType: "none" }}>
              <li>{t("privacyProtection.text30")}</li>
            </ul>
          </div>
          <div className={style.box}>
            <h3>{t("privacyProtection.text31")}</h3>
            <ul style={{ listStyleType: "none" }}>
              <li>{t("privacyProtection.text32")}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
