import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LOCAL_STORAGE_KEYS } from "@/common/localStorageKeys";
import {
  mostPopularList,
  selfSelectedList,
} from "@/pages/Index/components/CryptoData";

// token
const store = (set, get) => ({
  market: null,

  getMarket: () => get().market || null,

  setMarket: (marketData) => set(() => ({ market: marketData })),

  fetchMarket: async () => {
    try {
      const response = await fetch(
        "https://service.token13.net/home/market?column=Custom&current=1&pageSize=10"
      );
      const data = await response.json();
      if (data?.data) {
        set({ market: data.data });
      }
    } catch (error) {
      console.error("获取市场数据失败:", error);
    }
  },

  tradeTableActiveTab1: Object.keys(selfSelectedList)[0],
  setTradeTableActiveTab1: (tab) => set({ tradeTableActiveTab1: tab }),
  tradeTableActiveTab2: Object.keys(mostPopularList)[0],
  setTradeTableActiveTab2: (tab) => set({ tradeTableActiveTab2: tab }),
});

// 创建 store 并持久化
export const useMarketStore = create(
  persist(store, { name: LOCAL_STORAGE_KEYS.MAKET })
);

// 启动定时更新
setInterval(() => {
  useMarketStore.getState().fetchMarket();
}, 10000);

// 初始化时获取数据
useMarketStore.getState().fetchMarket();
