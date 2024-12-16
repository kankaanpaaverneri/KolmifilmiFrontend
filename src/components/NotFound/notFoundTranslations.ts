import { Language } from "../../types/type";
export interface NotFoundTranslations {
  notFound: string;
}

export const notFoundTranslations: Record<Language, NotFoundTranslations> = {
  fi: {
    notFound: "Sivua ei löydy",
  },
  en: {
    notFound: "Page not found",
  },
};
