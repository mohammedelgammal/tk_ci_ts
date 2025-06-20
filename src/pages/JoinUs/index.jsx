import style from "./index.module.less";
import splitSvg from "@/assets/image/split.svg";
import join1 from "@/assets/image/join1.png";
import join2 from "@/assets/image/join2.png";
import join3 from "@/assets/image/join3.png";
import { isMobileDevice } from "@/utils";
import { Checkbox, Card, Typography } from "antd";
import ContactUs from "@/components/Contact";
import { useState } from "react";
const { Title, Text, Paragraph } = Typography;
import { useTranslation } from "react-i18next";
import { Tabs } from "antd";
import {
  NextButton,
  PrevButton,
} from "@/components/Carousel/EmblaCarouselArrowButtons";

export default function JoinUs() {
  const { t } = useTranslation();
  const [checkedValues, setCheckedValues] = useState([]);

  const onChange = (values) => {
    setCheckedValues(values);
  };

  // 职位数据
  const jobList = [
    {
      key: "frontend",
      title: t("joinUs.webDeveloper"),
      location: t("joinUs.dubbai"),
      responsibilities: [
        t("joinUs.web1"),
        t("joinUs.web2"),
        t("joinUs.web3"),
        t("joinUs.web4"),
        t("joinUs.web5"),
        t("joinUs.web6"),
        t("joinUs.web7"),
      ],
      requirements: [
        t("joinUs.commonr"),
        t("joinUs.web8"),
        t("joinUs.web9"),
        t("joinUs.web10"),
        t("joinUs.web11"),
        t("joinUs.web12"),
        t("joinUs.web13"),
        t("joinUs.web14"),
        t("joinUs.web15"),
      ],
    },
    {
      key: "backend",
      title: t("joinUs.role1"),
      location: t("joinUs.dubbai"),
      responsibilities: [
        t("joinUs.backend1"),
        t("joinUs.backend2"),
        t("joinUs.backend3"),
        t("joinUs.backend4"),
        t("joinUs.backend5"),
        t("joinUs.backend6"),
      ],
      requirements: [
        t("joinUs.commonr"),
        t("joinUs.backend7"),
        t("joinUs.backend8"),
        t("joinUs.backend9"),
        t("joinUs.backend10"),
        t("joinUs.backend11"),
        t("joinUs.backend12"),
        t("joinUs.backend13"),
      ],
    },
    {
      key: "ios",
      title: t("joinUs.role2"),
      location: t("joinUs.dubbai"),
      responsibilities: [
        t("joinUs.ios1"),
        t("joinUs.ios2"),
        t("joinUs.ios3"),
        t("joinUs.ios4"),
        t("joinUs.ios5"),
      ],
      requirements: [
        t("joinUs.commonr"),
        t("joinUs.ios7"),
        t("joinUs.ios8"),
        t("joinUs.ios9"),
        t("joinUs.ios10"),
        t("joinUs.ios11"),
        t("joinUs.ios12"),
        t("joinUs.ios13"),
      ],
    },
    {
      key: "opsss",
      title: t("joinUs.ops"),
      location: t("joinUs.dubbai"),
      responsibilities: [
        t("joinUs.devops1"),
        t("joinUs.devops2"),
        t("joinUs.devops3"),
        t("joinUs.devops4"),
        t("joinUs.devops5"),
        t("joinUs.devops6"),
        t("joinUs.devops7"),
      ],
      requirements: [
        t("joinUs.commonr"),
        t("joinUs.devops8"),
        t("joinUs.devops9"),
        t("joinUs.devops10"),
        t("joinUs.devops11"),
        t("joinUs.devops12"),
        t("joinUs.devops13"),
        t("joinUs.devops14"),
        t("joinUs.devops15"),
        t("joinUs.devops16"),
      ],
    },
    {
      key: "android",
      title: t("joinUs.role3"),
      location: t("joinUs.dubbai"),
      responsibilities: [
        t("joinUs.android1"),
        t("joinUs.android2"),
        t("joinUs.android3"),
        t("joinUs.android4"),
        t("joinUs.android5"),
        t("joinUs.android6"),
        t("joinUs.android7"),
      ],
      requirements: [
        t("joinUs.commonr"),
        t("joinUs.android6"),
        t("joinUs.android7"),
        t("joinUs.android8"),
        t("joinUs.android9"),
        t("joinUs.android10"),
        t("joinUs.android11"),
      ],
    },
  ];

  // 过滤符合选中类别的职位
  const filteredJobs = checkedValues.length
    ? jobList.filter((job) => checkedValues.includes(job.key))
    : jobList;

  // jobList pagination

  const [currentPage, setCurrentPage] = useState(1); // initially first page

  const JOB_PER_PAGE = 3;
  const pagesCount = Math.ceil(filteredJobs.length / JOB_PER_PAGE);
  const currentJobList = filteredJobs.slice(
    (currentPage - 1) * JOB_PER_PAGE,
    currentPage * JOB_PER_PAGE
  );

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, pagesCount));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={style.joinUsContainer}>
        {/* <Menu /> */}
        <div className={style.joinUsContent}>
          <Title className={style.joinUsTitle}>{t("joinUs.title")}</Title>
          <Text className={style.joinUsSubtitle}>{t("joinUs.subtitle")}</Text>

          <div className={style.jobSection}>
            <div className={style.filterSection}>
              <div className={style.filterHeader}>
                <Text className={style.filterTitle}>{t("joinUs.filter")}</Text>
                <Text
                  className={
                    checkedValues.length > 0
                      ? style.clearBtnActive
                      : style.clearBtn
                  }
                  onClick={() => setCheckedValues([])}
                >
                  {t("joinUs.clear")}
                </Text>
              </div>

              <div className={style.jobCategory}>
                <Title level={5}>{t("joinUs.jobCategory")}</Title>
                <Checkbox.Group value={checkedValues} onChange={onChange}>
                  <div className={style.checkboxList}>
                    <Checkbox value="frontend">{t("joinUs.frontend")}</Checkbox>
                    <Checkbox value="backend">{t("joinUs.backend")}</Checkbox>
                    <Checkbox value="opsss">{t("joinUs.ops")}</Checkbox>
                    <Checkbox value="android">{t("joinUs.android")}</Checkbox>
                    <Checkbox value="ios">{t("joinUs.ios")}</Checkbox>
                  </div>
                </Checkbox.Group>
              </div>
            </div>
            <Tabs
              className={style.tabSection}
              defaultActiveKey="all"
              // item
              onChange={(key) => {
                if (key === "all") {
                  setCheckedValues([]);
                } else {
                  setCheckedValues([key]);
                }
              }}
              // i
              items={[
                {
                  key: "all",
                  label: t("All"),
                  children: (
                    <div className={style.jobList}>
                      {jobList.map((job) => (
                        <Card hoverable className={style.jobCard} key={job.key}>
                          <Title
                            level={4}
                            className={style.jobCardTitle}
                          >
                            {job.title}
                          </Title>
                          <Text className={style.jobLocation} type="secondary">
                            {job.location}{" "}
                            <img
                              src={splitSvg}
                              className={style.splitSvg}
                              alt="split"
                            />
                            {job.title}
                          </Text>
                          <Paragraph className={style.jobDescription}>
                            <ol style={{ listStyleType: "none" }}>
                              <li
                                style={{
                                  marginInline: "0",
                                  paddingInline: "0",
                                  fontSize: "14px",
                                  marginBottom: "12px",
                                  fontWeight: "500",
                                }}
                              >
                                {t("joinUs.responsibilities")}
                              </li>
                              {job.responsibilities.map((resp, index) => (
                                <li
                                  style={{
                                    marginInline: "0",
                                    paddingInline: "0",
                                    backgroundColor: "red !important",
                                    fontSize: "14px",
                                    marginBottom:
                                      index !== job.responsibilities.length - 1
                                        ? "12px"
                                        : "0px",
                                  }}
                                  key={index}
                                >
                                  * {resp}
                                </li>
                              ))}
                            </ol>
                          </Paragraph>
                          <Paragraph className={style.jobDescription}>
                            <ol style={{ listStyleType: "none" }}>
                              <li
                                style={{
                                  marginInline: "0",
                                  paddingInline: "0",
                                  fontSize: "14px",
                                  marginBottom: "12px",
                                  fontWeight: "500",
                                }}
                              >
                                {t("joinUs.requirements")}
                              </li>
                              {job.requirements.map((req, index) => (
                                <li
                                  style={{
                                    marginInline: "0",
                                    paddingInline: "0",
                                    fontSize: "14px",
                                    marginBottom:
                                      index !== job.responsibilities.length - 1
                                        ? "12px"
                                        : "0px",
                                  }}
                                  key={index}
                                >
                                  * {req}
                                </li>
                              ))}
                            </ol>
                          </Paragraph>
                        </Card>
                      ))}
                    </div>
                  ),
                },
                ...jobList.map((job) => ({
                  key: job.key,
                  label: job.title,
                  children: (
                    <div className={style.jobList}>
                      <Card hoverable className={style.jobCard} key={job.key}>
                        <Title level={4} className={style.jobCardTitle}>
                          {job.title}
                        </Title>
                        <Text className={style.jobLocation} type="secondary">
                          {job.location}{" "}
                          <img
                            src={splitSvg}
                            className={style.splitSvg}
                            alt="split"
                          />
                          {job.title}
                        </Text>
                        <Paragraph className={style.jobDescription}>
                          <ol style={{ listStyleType: "none" }}>
                            <li
                              style={{
                                marginInline: "0",
                                paddingInline: "0",
                                fontSize: "14px",
                                marginBottom: "12px",
                                fontWeight: "500",
                              }}
                            >
                              {t("joinUs.responsibilities")}
                            </li>
                            {job.responsibilities.map((resp, index) => (
                              <li
                                style={{
                                  marginInline: "0",
                                  paddingInline: "0",
                                  fontSize: "14px",
                                  marginBottom:
                                    index !== job.responsibilities.length - 1
                                      ? "12px"
                                      : "0px",
                                }}
                                key={index}
                              >
                                * {resp}
                              </li>
                            ))}
                          </ol>
                        </Paragraph>
                        <Paragraph className={style.jobDescription}>
                          <ol
                            className={style.jobDescriptionList}
                            style={{ listStyleType: "none" }}
                          >
                            <li
                              style={{
                                marginInline: "0",
                                paddingInline: "0",
                                fontSize: "14px",
                                marginBottom: "12px",
                                fontWeight: "500",
                              }}
                            >
                              {t("joinUs.requirements")}
                            </li>
                            {job.requirements.map((req, index) => (
                              <li
                                style={{
                                  marginInline: "0",
                                  paddingInline: "0",
                                  fontSize: "14px",
                                  marginBottom:
                                    index !== job.responsibilities.length - 1
                                      ? "12px"
                                      : "0px",
                                }}
                                key={index}
                              >
                                * {req}
                              </li>
                            ))}
                          </ol>
                        </Paragraph>
                      </Card>
                    </div>
                  ),
                })),
              ]}
            />
            <div className={`${style.jobList} ${style.jobListLg}`}>
              {currentJobList.map((job) => (
                <Card className={style.jobCard} key={job.key}>
                  <Title level={4}>{job.title}</Title>
                  <Text className={style.jobLocation} type="secondary">
                    {job.location}{" "}
                    <img
                      src={splitSvg}
                      className={style.splitSvg}
                      alt="split"
                    />
                    {job.title}
                  </Text>
                  <Paragraph className={style.jobDescription}>
                    <ol style={{ listStyleType: "none" }}>
                      <li>{t("joinUs.responsibilities")}</li>
                      {job.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ol>
                  </Paragraph>
                  <Paragraph className={style.jobDescription}>
                    <ol style={{ listStyleType: "none" }}>
                      <li>{t("joinUs.requirements")}</li>
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ol>
                  </Paragraph>
                </Card>
              ))}
              <div className={`embla__buttons ${style.paginationBtns}`}>
                <PrevButton onClick={handlePrev} disabled={currentPage === 1} />
                <NextButton
                  onClick={handleNext}
                  disabled={currentPage === pagesCount}
                />
              </div>
            </div>
            {/* mobile view for job filter */}
          </div>
        </div>
        <div className={style.joinUsExtraSection}>
          <div className={style.extraCard}>
            <div className={style.extraIcon}>
              <img src={join1} alt="Hand Icon" />
            </div>
            <h3 className="text-base">{t("joinUs.dibu1")}</h3>
            <ul>
              <li>* {t("joinUs.dibu2")}</li>
              <li>* {t("joinUs.dibu3")}</li>
              <li>* {t("joinUs.dibu4")}</li>
              <li>* {t("joinUs.dibu5")}</li>
            </ul>
          </div>

          <div className={style.extraCard}>
            <div className={style.extraIcon}>
              <img src={join2} alt="Plus Icon" />
            </div>
            <h3 className="text-base md:text-lg">{t("joinUs.dibu6")}</h3>
            <ul>
              <li>* {t("joinUs.dibu7")}</li>
              <li>* {t("joinUs.dibu8")}</li>
              <li>* {t("joinUs.dibu9")}</li>
              <li>* {t("joinUs.dibu10")}</li>
            </ul>
          </div>

          <div className={style.extraCard}>
            <div className={style.extraIcon}>
              <img src={join3} alt="User Icon" />
            </div>
            <h3 className="text-base md:text-lg">{t("joinUs.dibu11")}</h3>
            <ul>
              <li>* {t("joinUs.dibu12")}</li>
              <li>* {t("joinUs.dibu13")}</li>
            </ul>
          </div>
        </div>
        <ContactUs />
        {/* <Footer /> */}
      </div>
    </>
  );
}
