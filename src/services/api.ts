import { newArrivals, bestSellers, saleItems } from '../data/mockData';

// Simulate network delay for real data integration feel
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  getNewArrivals: async () => {
    await delay(600);
    return newArrivals;
  },
  getBestSellers: async () => {
    await delay(600);
    return bestSellers;
  },
  getSaleItems: async () => {
    await delay(600);
    return saleItems;
  }
};
