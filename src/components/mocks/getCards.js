import { cardContent } from "./cardContent";

export const getCards = () => {
  return new Promise((resolve, reject) => {
    resolve(cardContent);
  });
};
