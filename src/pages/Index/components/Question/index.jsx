import { useState } from "react";
import style from "./index.module.less";
import addIcon from "@/assets/image/add.svg";
import minusIcon from "@/assets/image/minus.svg";
import { useTranslation } from "react-i18next";

export default function Question() {
  const { t } = useTranslation();
  const questions = [
    {
      title: t("question.question1"),
      intro: t("question.answer1"),
      list: [
        t("question.answer1_2"),
        t("question.answer1_3"),
        t("question.answer1_4"),
        t("question.answer1_5"),
        t("question.answer1_6"),
        t("question.answer1_7"),
      ],
      // listTitle: t("question.answer1_1"),
    },
    {
      title: t("question.question2"),
      content: t("question.answer2"),
    },
    {
      title: t("question.question3"),
      content: t("question.answer3"),
    },
    {
      title: t("question.question4"),
      content: t("question.answer4"),
    },
  ];

  // ✅ 改为一个对象存储每个问题的展开状态
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (index) => {
    setOpenQuestions((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // ✅ 仅修改当前问题的展开状态
    }));
  };

  return (
    <div className={style.questionContainer}>
      <div className={style.questionTitle}>{t("question.title")}</div>
      <div className={style.accordionContainer}>
        {questions.map((question, index) => (
          <div key={index} className={style.accordionItem}>
            <div
              className={style.accordionHeader}
              onClick={() => toggleQuestion(index)}
            >
              {question.title}
              <span
                className={`${style.icon} ${openQuestions[index] ? style.active : ""}`}
              >
                <img
                  src={openQuestions[index] ? minusIcon : addIcon}
                  alt="icon"
                />
              </span>
            </div>
            <div
              className={`${style.accordionContent} ${openQuestions[index] ? style.active : ""}`}
            >
              {question.intro ? (
                <>
                  <p>{question.intro}</p>
                  {/* <p>{question.listTitle}</p> */}
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    {question.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <p>{question.content}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}