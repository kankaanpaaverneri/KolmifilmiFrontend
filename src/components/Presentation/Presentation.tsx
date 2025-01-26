import { useEffect, useState } from "react";
import {
  presentationContent,
  PresentationTranslations,
} from "./presentationTranslations";
import { useAppSelector } from "../../hooks/hooks";
import logo from "/kolmifilmi_logo.png";
import "./Presentation.css";
import video from "/kolmifilmi_showreel.mp4";

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
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={video} />
        </video>
      </div>
      <div className="images-container">
        <div className="images-header">
          <h1>{presentation.behindTheScenes}</h1>
        </div>
        <div className="horizontal-images-list">
          {presentation.horizontalImages1.map((image, index) => {
            return <img key={index} src={image} />;
          })}
        </div>
        <div className="horizontal-images-list">
          {presentation.horizontalImages2.map((image, index) => {
            return <img key={index} src={image} />;
          })}
        </div>
        <div className="vertical-images-list">
          {presentation.verticalImages.map((image, index) => {
            return <img key={index} src={image} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Presentation;
