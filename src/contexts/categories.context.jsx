import { createContext, useState, useEffect } from "react";
// import SHOP_DATA from "../shop-data.js";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";
export const CategoriesContext = createContext({
  setCategoriesMap: () => null,
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState([]);
  const value = { categoriesMap, setCategoriesMap };
  useEffect(() => {
    getCategoriesAndDocuments().then((categoryMap) =>
      setCategoriesMap(categoryMap)
    );
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
