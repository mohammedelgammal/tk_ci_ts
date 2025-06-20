import style from "./index.module.less";
import { useTranslation } from "react-i18next";
import { Typography } from "antd";

const { Title } = Typography;

export default function UserAgreement() {
  const { t } = useTranslation();

  const sections = [
    { title: t("userAgreement.text3"), items: [t("userAgreement.text4")] },
    { title: t("userAgreement.text5"), items: [t("userAgreement.text6"), t("userAgreement.text7"), t("userAgreement.text8"), t("userAgreement.text9"), t("userAgreement.text10")] },
    { title: t("userAgreement.text11"), items: [t("userAgreement.text12"), t("userAgreement.text13")] },
    { title: t("userAgreement.text14"), items: [t("userAgreement.text15"), t("userAgreement.text16"), t("userAgreement.text17")] },
    { title: t("userAgreement.text18"), items: [t("userAgreement.text19")] },
    { title: t("userAgreement.text20"), items: [t("userAgreement.text22"), t("userAgreement.text23"), t("userAgreement.text24")] },
    { title: t("userAgreement.text25"), items: [t("userAgreement.text26")] },
    { title: t("userAgreement.text27"), items: [t("userAgreement.text28")] },
    { title: t("userAgreement.text29"), items: [t("userAgreement.text30")] },
  ];

  return (
    <div className={style.userAgreementContainer}>
      <div className={style.userAgreementContent}>
        <Title className={style.userAgreementTitle}>{t("userAgreement.text1")}</Title>
        <div className={style.time}>{t("userAgreement.text2")}</div>

        {sections.map((section, index) => (
          <div key={index} className={style.box}>
            <h3>{section.title}</h3>
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
