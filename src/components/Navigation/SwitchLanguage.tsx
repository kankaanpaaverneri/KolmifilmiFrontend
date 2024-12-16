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
        🇫🇮
      </button>
      <button
        className={selectedLanguage === "en" ? "selected" : ""}
        onClick={() => onSwitchLanguage(LanguageIdentifier.EN)}
      >
        🇬🇧
      </button>
    </div>
  );
}

export default SwitchLanguage;
