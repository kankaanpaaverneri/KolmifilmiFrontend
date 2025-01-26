import { NavLink } from "react-router";
import {
  navigationContent,
  NavigationTranslations,
} from "./navigationTranslations";
import { useEffect, useState } from "react";
import SwitchLanguage from "./SwitchLanguage";
import { LanguageIdentifier, NavigationIdentifier } from "../../types/enum";
import { Language } from "../../types/type";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setLanguage } from "../../slices/languageSlice";
import "./Navigation.css";
import HamburgerIcon from "./HamburgerIcon";
import { useLocation } from "react-router";
import { paths } from "../../paths/paths";
import getNavSelected from "./getNavSelected";

interface NavState {
  visible: boolean;
  navSelected: NavigationIdentifier;
}

function Navigation() {
  const selectedLanguage: Language = useAppSelector(
    (state) => state.languageReducer.selectedLanguage,
  );
  const dispatch = useAppDispatch();
  const [navContent, setNavContent] = useState<NavigationTranslations>(
    navigationContent[selectedLanguage] || navigationContent["fi"],
  );

  const location = useLocation();

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
    if (location.pathname) {
      setNavState((prev) => {
        return {
          ...prev,
          navSelected: getNavSelected(location.pathname),
        };
      });
    }
  }, [selectedLanguage, location]);

  const [navState, setNavState] = useState<NavState>({
    visible: false,
    navSelected: NavigationIdentifier.NONE,
  });

  function onClickNavLink(selected: NavigationIdentifier) {
    setNavState(() => {
      return {
        visible: false,
        navSelected: selected,
      };
    });
  }

  function onClickHamburgerIcon(): void {
    setNavState((prev) => {
      return {
        ...prev,
        visible: prev.visible ? false : true,
      };
    });
  }

  return (
    <>
      <HamburgerIcon
        onClick={onClickHamburgerIcon}
        navVisible={navState.visible}
        aria-label="Toggle navigation"
      />
      <header
        aria-hidden={!navState.visible}
        id="primary-navigation"
        className={`primary-navigation ${navState.visible ? "selected" : ""}`}
      >
        <nav>
          <a className="exit-nav" onClick={onClickHamburgerIcon}>
            X
          </a>
          <NavLink
            onClick={() => {
              onClickNavLink(NavigationIdentifier.PRESENTATION);
            }}
            to={paths.presentation}
            className={`${navState.navSelected === NavigationIdentifier.PRESENTATION ? "selected" : ""}`}
          >
            {navContent.presentation}
          </NavLink>
          <NavLink
            onClick={() => {
              onClickNavLink(NavigationIdentifier.PRODUCTIONS);
            }}
            aria-hidden={true}
            to={paths.productions}
            className={`${navState.navSelected === NavigationIdentifier.PRODUCTIONS ? "selected" : ""}`}
          >
            {navContent.productions}
          </NavLink>
          <NavLink
            onClick={() => {
              onClickNavLink(NavigationIdentifier.CONTACT);
            }}
            aria-hidden={true}
            to={paths.contact}
            className={`${navState.navSelected === NavigationIdentifier.CONTACT ? "selected" : ""}`}
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
