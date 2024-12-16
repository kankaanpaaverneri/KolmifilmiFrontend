import { NavLink } from "react-router";
import {
  navigationContent,
  NavigationTranslations,
} from "./navigationTranslations";
import { useEffect, useState } from "react";
import SwitchLanguage from "./SwitchLanguage";
import { LanguageIdentifier } from "../../types/enum";
import { Language } from "../../types/type";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setLanguage } from "../../slices/languageSlice";
import "./Navigation.css";

function Navigation() {
  const selectedLanguage: Language = useAppSelector(
    (state) => state.languageReducer.selectedLanguage,
  );
  const dispatch = useAppDispatch();
  const [navContent, setNavContent] = useState<NavigationTranslations>(
    navigationContent[selectedLanguage] || navigationContent["fi"],
  );

  function onSwitchLanguage(languageId: LanguageIdentifier): void {
    if (!languageId) {
      return;
    }
    switch (languageId) {
      case LanguageIdentifier.FI:
        dispatch(setLanguage("fi"));
        break;
      case LanguageIdentifier.EN:
        dispatch(setLanguage("en"));
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    if (selectedLanguage === "fi" || selectedLanguage === "en") {
      setNavContent(navigationContent[selectedLanguage]);
    }
  }, [selectedLanguage]);

  return (
    <>
      <header>
        <nav>
          <NavLink to="presentation">{navContent.presentation}</NavLink>
          <NavLink to="productions">{navContent.productions}</NavLink>
          <NavLink to="contact">{navContent.contact}</NavLink>
        </nav>
        <SwitchLanguage
          onSwitchLanguage={onSwitchLanguage}
          selectedLanguage={selectedLanguage}
        />
      </header>
    </>
  );
}

export default Navigation;
