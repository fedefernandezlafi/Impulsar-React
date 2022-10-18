import { useState, useEffect } from "react";
import { getCards } from "../mocks/getCards";

export const useCards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    getCards()
      .then((resp) => {
        setCards(resp);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  }, []);
  return { cards };
};
