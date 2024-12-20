import { Language } from "../../types/type";

export interface PresentationTranslations {
  title: string;
  presentation: string;
}

export const presentationContent: Record<Language, PresentationTranslations> = {
  fi: {
    title: "Kolmifilmi",
    presentation: `
    Me olemme tuotantoyhtiö, joka erikoistuu mainoselokuviin, yritysvideoihin ja musiikkivideoihin.
    Tarjoamme mediaratkaisuja, joissa elokuvallinen tarinankerronta yhdistyy kohderyhmäsi tarpeisiin.
    `,
  },
  en: {
    title: "Kolmifilmi",
    presentation: `
    We are a production company that specializes in commercial, business and music videos.
    Providing media solutions where cinematic storytelling connects to you target audiences needs.
    `,
  },
};
