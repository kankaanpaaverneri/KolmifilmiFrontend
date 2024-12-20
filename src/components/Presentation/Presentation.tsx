import { useEffect, useState } from "react";
import {
  presentationContent,
  PresentationTranslations,
} from "./presentationTranslations";
import { useAppSelector } from "../../hooks/hooks";
import logo from "/kolmifilmi_logo.png";
import "./Presentation.css";

function Presentation() {
  const selectedLanguage = useAppSelector(
    (state) => state.languageReducer.selectedLanguage,
  );
  const [presentation, setPresentation] = useState<PresentationTranslations>(
    presentationContent[selectedLanguage] || presentationContent["fi"],
  );
  useEffect(() => {
    if (selectedLanguage === "fi" || selectedLanguage === "en") {
      setPresentation(presentationContent[selectedLanguage]);
    }
  }, [selectedLanguage]);

  return (
    <div className="presentation-container">
      <img width={"200rem"} src={logo} />
      <p>{presentation.presentation}</p>
    </div>
  );
}

export default Presentation;
