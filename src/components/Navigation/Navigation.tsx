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
import HamburgerIcon from "./HamburgerIcon";

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

  const [navVisible, setNavVisible] = useState<boolean>(false);

  function onClickHamburgerIcon(): void {
    setNavVisible((prev) => (prev ? false : true));
  }

  return (
    <>
      <HamburgerIcon onClick={onClickHamburgerIcon} navVisible={navVisible} />
      <header
        aria-hidden={!navVisible}
        id="primary-navigation"
        className="primary-navigation"
        data-visible={navVisible}
      >
        <nav>
          <NavLink onClick={() => setNavVisible(false)} to="presentation">
            {navContent.presentation}
          </NavLink>
          <NavLink
            onClick={() => setNavVisible(false)}
            aria-hidden={true}
            to="productions"
          >
            {navContent.productions}
          </NavLink>
          <NavLink
            onClick={() => setNavVisible(false)}
            aria-hidden={true}
            to="contact"
          >
            {navContent.contact}
          </NavLink>
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
