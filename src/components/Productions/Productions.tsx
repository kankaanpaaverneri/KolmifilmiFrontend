import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/hooks";
import {
  productionsTranslations,
  ProductionsTranslations,
} from "./productionsTranslations";
import "./Productions.css";
import Production from "./Production";

function Productions() {
  const selectedLanguage = useAppSelector(
    (state) => state.languageReducer.selectedLanguage,
  );
  const [productionsContent, setProductionsContent] =
    useState<ProductionsTranslations>(
      productionsTranslations[selectedLanguage] ||
        productionsTranslations["fi"],
    );

  useEffect(() => {
    if (selectedLanguage === "fi" || selectedLanguage === "en") {
      setProductionsContent(productionsTranslations[selectedLanguage]);
    }
  }, [selectedLanguage]);
  return (
    <div className="productions">
      <h1>{productionsContent.mainTitle}</h1>
      <h2>{productionsContent.shortFilmsTitle}</h2>
      <div className="productions-container">
        {productionsContent.productions.map((production) => {
          return (
            <Production key={production.productionId} production={production} />
          );
        })}
      </div>
    </div>
  );
}

export default Productions;
