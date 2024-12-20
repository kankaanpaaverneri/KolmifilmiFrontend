import { Language } from "../../types/type";

export interface NavigationTranslations {
  presentation: string;
  productions: string;
  contact: string;
}

export const navigationContent: Record<Language, NavigationTranslations> = {
  fi: {
    presentation: "Esittely",
    productions: "Tuotannot",
    contact: "Ota yhteyttä",
  },
  en: {
    presentation: "Presentation",
    productions: "Productions",
    contact: "Contact us",
  },
};
