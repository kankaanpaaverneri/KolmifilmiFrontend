import { LanguageIdentifier } from "../../types/enum";
import { Language } from "../../types/type";
import "./SwitchLanguage.css";
interface SwitchLanguageProps {
  onSwitchLanguage: (value: LanguageIdentifier) => void;
  selectedLanguage: Language;
}

function SwitchLanguage({
  onSwitchLanguage,
  selectedLanguage,
}: SwitchLanguageProps) {
  return (
    <div className={"language-buttons"}>
      <button
        className={selectedLanguage === "fi" ? "selected" : ""}
        onClick={() => onSwitchLanguage(LanguageIdentifier.FI)}
      >
        Suomi
      </button>
      <button
        className={selectedLanguage === "en" ? "selected" : ""}
        onClick={() => onSwitchLanguage(LanguageIdentifier.EN)}
      >
        English
      </button>
    </div>
  );
}
/*
const englishFlag = `🇬🇧`;
const finnishFlag = `🇫🇮`;
*/

export default SwitchLanguage;
