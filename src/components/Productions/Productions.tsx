import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/hooks";
import {
  productionsTranslations,
  ProductionsTranslations,
} from "./productionsTranslations";
import "./Productions.css";
import ShortFilmProduction from "./ShortFilmProduction";
import { OtherProductions } from "./OtherProductions";

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
      <div className="film-productions-container">
        {productionsContent.shortfilmProductions.map((production) => {
          return (
            <ShortFilmProduction
              key={production.productionId}
              production={production}
            />
          );
        })}
      </div>
      <h2>{productionsContent.musicVideosTitle}</h2>
      <OtherProductions
        productions={productionsContent.musicVideoProductions}
      />
      <h2>{productionsContent.commericalVideosTitle}</h2>
      <OtherProductions
        productions={productionsContent.commercialVideoProductions}
      />
    </div>
  );
}

export default Productions;
