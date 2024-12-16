import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/hooks";
import {
  notFoundTranslations,
  NotFoundTranslations,
} from "./notFoundTranslations";

function NotFound() {
  const selectedLanguage = useAppSelector(
    (state) => state.languageReducer.selectedLanguage,
  );
  const [notFoundContent, setNotFoundContent] = useState<NotFoundTranslations>(
    notFoundTranslations[selectedLanguage] || notFoundTranslations["fi"],
  );

  useEffect(() => {
    if (selectedLanguage === "fi" || selectedLanguage === "en") {
      setNotFoundContent(notFoundTranslations[selectedLanguage]);
    }
  }, [selectedLanguage]);

  return (
    <div>
      <h1>{notFoundContent.notFound}</h1>
    </div>
  );
}

export default NotFound;
