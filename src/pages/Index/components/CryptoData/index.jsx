import React, { useState } from "react";
import { useMarketStore } from "@/stores/market";
import { Table, Tabs } from "antd";
import style from "./index.module.less";
import usdtImage from "@/assets/image/usdt.png";
import { useTranslation } from "react-i18next";
import EmblaCarousel from "@/components/Carousel/EmblaCarousel";

import {
  PrevButton,
  NextButton,
} from "@/components/Carousel/EmblaCarouselArrowButtons";

export const selfSelectedList = {
  selfSelected: [
    {
      coin: "GT",
      name: "Gate Token",
      price: "$21.397",
      volume: "12.93M",
      change: "-3.85%",
    },
    {
      coin: "BTC",
      name: "Bitcoin",
      price: "$88225.5",
      volume: "698.92M",
      change: "-4.91%",
    },
  ],
  BTC: [
    {
      coin: "BTC",
      name: "Bitcoin",
      price: "$88225.5",
      volume: "698.92M",
      change: "-4.91%",
    },
    {
      coin: "ETH",
      name: "Ethereum",
      price: "$2173.95",
      volume: "328.73M",
      change: "-6.21%",
    },
  ],
  ETH: [
    {
      coin: "ETH",
      name: "Ethereum",
      price: "$2173.95",
      volume: "328.73M",
      change: "-6.21%",
    },
    {
      coin: "PI",
      name: "Pi Network",
      price: "$1.8091",
      volume: "200.7M",
      change: "-5.3%",
    },
  ],
  USDT: [
    {
      coin: "USDT",
      name: "Tether",
      price: "$1.00",
      volume: "500M",
      change: "+0.02%",
    },
    {
      coin: "SUL",
      name: "Sui",
      price: "$2.8288",
      volume: "115.31M",
      change: "+3.82%",
    },
  ],
};
export const mostPopularList = {
  mostPopular: [
    { coin: "GT", name: "Gate Token", price: "$21.397", change: "-3.85%" },
    {
      coin: "ALCH",
      name: "Alchemist AI",
      price: "$0.010581",
      change: "+29.141%",
    },
    { coin: "ROAM", name: "Roam", price: "$0.39284", change: "+687.65%" },
    {
      coin: "SOLV",
      name: "Solv Protocol",
      price: "$0.05181",
      change: "+7.6%",
    },
    { coin: "SWARMS", name: "Swarms", price: "$0.05151", change: "+3.85%" },
    { coin: "BLZ", name: "Bluzelle", price: "$0.006484", change: "+49.14%" },
    ,
  ],
  dailyChange: [
    { coin: "GT", name: "Gate Token", price: "$21.397", change: "-3.85%" },
    {
      coin: "ALCH",
      name: "Alchemist AI",
      price: "$0.010581",
      change: "+29.141%",
    },
    { coin: "ROAM", name: "Roam", price: "$0.39284", change: "+687.65%" },
    {
      coin: "SOLV",
      name: "Solv Protocol",
      price: "$0.05181",
      change: "+7.6%",
    },
    { coin: "SWARMS", name: "Swarms", price: "$0.05151", change: "+3.85%" },
    { coin: "BLZ", name: "Bluzelle", price: "$0.006484", change: "+49.14%" },
    ,
  ],
};

const TableOne = ({ marketData }) => {
  const [pageIndexes, setPageIndexes] = useState({}); // keeps page index per tab

  const {
    tradeTableActiveTab1: activeKey1,
    setTradeTableActiveTab1: setActiveKey1,
  } = useMarketStore();

  const { t } = useTranslation();

  const handlePrev = (key) => {
    setPageIndexes((prev) => ({
      ...prev,
      [key]: Math.max((prev[key] || 0) - 1, 0),
    }));
  };

  const handleNext = (key, totalItems) => {
    const maxPage = Math.floor((totalItems - 1) / 6);
    setPageIndexes((prev) => ({
      ...prev,
      [key]: Math.min((prev[key] || 0) + 1, maxPage),
    }));
  };

  return (
    <div className={style.tradePanel}>
      <Tabs
        activeKey={activeKey1}
        onChange={setActiveKey1}
        className={style.tradeTabs}
        items={Object.keys(selfSelectedList).map((key) => {
          const coinList = marketData?.info || [];
          const currentPage = pageIndexes[key] || 0;

          const pageData = coinList.slice(
            currentPage * 6,
            (currentPage + 1) * 6
          );

          return {
            label: t(`cryptoData.${key}`),
            key: key,
            children: (
              <>
                <div className={style.tradeHeader}>
                  <div className={style.headerCoin}>{t("cryptoData.coin")}</div>
                  <span className={style.headerPrice}>
                    {t("cryptoData.price")}
                  </span>
                  <span className={style.headerVolume}>
                    {t("cryptoData.volume")}
                  </span>
                  <span className={style.headerChange}>
                    {t("cryptoData.change")}
                  </span>
                  <span className={style.headerButton}>
                    {t("cryptoData.change")}
                  </span>
                </div>
                <div className={style.tradeList}>
                  {pageData?.map((item, index) => {
                    const numericChange = parseFloat(item.rate_percent);
                    return (
                      <div key={index} className={style.tradeItem}>
                        <div className={style.headerCoin}>
                          <img
                            src={
                              item.coin_name === "USDT"
                                ?  usdtImage 
                                : item.icon
                            }
                            alt="tokenimage"
                            className="w-5 h-5"
                          />
                          <div className="flex flex-col gap-0.5">
                            <span className="text-sm">{item.coin_name}</span>
                            <span className="text-xs font-light text-[#FFFFFF]">
                              {item.coin_name}
                            </span>
                          </div>
                        </div>
                        <span className={style.headerPrice}>
                          ${Number(item.price).toFixed(2)}
                        </span>
                        <span className={style.headerVolume}>
                          {Number(item.rate_percent).toFixed(4)}
                        </span>
                        <span
                          className={`${style.shortChange} ${
                            numericChange > 0
                              ? style.positive
                              : numericChange < 0
                                ? style.negative
                                : ""
                          }`}
                        >
                          {Number(numericChange.toFixed(2))}%
                        </span>
                        <button className={style.tradeButton}>
                          {t("cryptoData.trade")}
                        </button>
                      </div>
                    );
                  })}
                </div>
                {/* Left/Right Pagination Buttons */}
                <div className={`embla__buttons ${style.arrowContainer}`}>
                  <PrevButton
                    onClick={() => handlePrev(key)}
                    disabled={currentPage === 0}
                  />
                  <NextButton
                    onClick={() => handleNext(key, coinList.length)}
                    disabled={(currentPage + 1) * 6 >= coinList.length}
                  />
                </div>
              </>
            ),
          };
        })}
      />
    </div>
  );
};

const TableTwo = ({ marketData }) => {
  // const [activeKey2, setActiveKey2] = useState(
  //   Object.keys(mostPopularList)[0]
  // );

  const [pageIndexes, setPageIndexes] = useState({}); // keeps page index per tab

  const handlePrev = (key) => {
    setPageIndexes((prev) => ({
      ...prev,
      [key]: Math.max((prev[key] || 0) - 1, 0),
    }));
  };

  const handleNext = (key, listLength) => {
    const maxPage = Math.floor((listLength - 1) / 6);
    setPageIndexes((prev) => ({
      ...prev,
      [key]: Math.min((prev[key] || 0) + 1, maxPage),
    }));
  };

  const {
    tradeTableActiveTab2: activeKey2,
    setTradeTableActiveTab2: setActiveKey2,
  } = useMarketStore();

  const { t } = useTranslation();

  return (
    <div className={style.tradePanel}>
      <Tabs
        activeKey={activeKey2}
        onChange={setActiveKey2}
        className={style.tradeTabs}
        items={Object.keys(mostPopularList).map((key) => {
          const coinList = marketData?.info || [];
          const currentPage = pageIndexes[key] || 0;

          const pageData = coinList.slice(
            currentPage * 6,
            (currentPage + 1) * 6
          );
          return {
            label: t(`cryptoData.${key}`),
            key: key,
            children: (
              <>
                <div className={style.shortHeader}>
                  <span className={style.headerCoin}>
                    {t("cryptoData.coin")}
                  </span>
                  <span className={style.shortPrice}>
                    {t("cryptoData.price")}
                  </span>
                  <span className={style.shortChange}>
                    {t("cryptoData.change")}
                  </span>
                </div>
                <div className={style.tradeList}>
                  {pageData?.map((item, index) => {
                    const numericChange = parseFloat(item.rate_percent);
                    return (
                      <div key={index} className={style.tradeItem}>
                        <div className={style.headerCoin}>
                          <img
                            src={
                              item.coin_name === "USDT"
                                ?  usdtImage 
                                : item.icon
                            }
                            alt="tokenimage"
                            className="w-5 h-5"
                          />
                          <div className="flex flex-col gap-0.5">
                            <span className="text-sm">{item.coin_name}</span>
                            <span className="text-xs font-light text-[#FFFFFF]">
                              {item.coin_name}
                            </span>
                          </div>
                        </div>
                        <span className={style.shortPrice}>
                          ${Number(item.price).toFixed(3)}
                        </span>
                        <span
                          className={`${style.shortChange} ${
                            numericChange > 0
                              ? style.positive
                              : numericChange < 0
                                ? style.negative
                                : ""
                          }`}
                        >
                          {Number(numericChange.toFixed(2))}%
                        </span>
                      </div>
                    );
                  })}
                </div>
                {/* Left/Right Pagination Buttons */}
                <div className={`embla__buttons ${style.arrowContainer}`}>
                  <PrevButton
                    onClick={() => handlePrev(key)}
                    disabled={currentPage === 0}
                  />
                  <NextButton
                    onClick={() => handleNext(key, coinList.length)}
                    disabled={(currentPage + 1) * 6 >= coinList.length}
                  />
                </div>
              </>
            ),
          };
        })}
      />
    </div>
  );
};

export default function CryptoData() {
  const { t } = useTranslation();

  const { market: marketData } = useMarketStore();

  const OPTIONS = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className={style.tradeContainer}>
      <h2 className={`${style.title}`}>{t("cryptoData.title")}</h2>

      <div className={style.tradePanels}>
        <EmblaCarousel
          slides={SLIDES}
          options={OPTIONS}
          customClassName={style.emblaCarousel}
        >
          <TableOne marketData={marketData} />
          <TableTwo marketData={marketData} />
        </EmblaCarousel>
        <div className={style.tradeTables}>
          <TableOne marketData={marketData} />
          <TableTwo marketData={marketData} />
        </div>
      </div>
    </div>
  );
}
