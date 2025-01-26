import { useEffect, useState } from "react";
import {
  presentationContent,
  PresentationTranslations,
} from "./presentationTranslations";
import { useAppSelector } from "../../hooks/hooks";
import logo from "/kolmifilmi_logo.png";
import "./Presentation.css";
import video from "/kolmifilmi_showreel.mp4";
import ImagesContainer from "./ImagesContainer";
import { useNavigate } from "react-router";
import { paths } from "../../paths/paths";

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
  const navigation = useNavigate();
  function goToContactPage() {
    navigation(paths.contact);
  }

  return (
    <div className="presentation-container">
      <img width={"200rem"} src={logo} />
      <button onClick={goToContactPage}>{presentation.contactUs}</button>
      <p>{presentation.presentation}</p>
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={video} />
        </video>
      </div>
      <ImagesContainer presentation={presentation} />
    </div>
  );
}

export default Presentation;
