import { Language } from "../../types/type";

export interface ProductionTranslation {
  productionId: number;
  productionName: string;
  productionDescription: string;
  productionPoster: string;
  imdbLink: string;
}

export interface ProductionsTranslations {
  mainTitle: string;
  shortFilmsTitle: string;
  musicVideosTitle: string;
  commericalVideosTitle: string;
  productions: ProductionTranslation[];
}

import vkPoster from "/vk_poster_small.png";
import pkPoster from "/pk_poster_small.png";
import trPoster from "/tr_poster_small.png";

export const productionsTranslations: Record<
  Language,
  ProductionsTranslations
> = {
  fi: {
    mainTitle: "Tuotannot",
    shortFilmsTitle: "Lyhytelokuvat",
    productions: [
      {
        productionId: 1,
        productionName: "Meidän Valtakunta",
        productionDescription: `
        Meidän Valtakunta on syksyllä 2024 julkaistu lyhytelokuva,
        joka yhdistelee länsimaista satuperinnettä moderneihin
        musiikkivideokerronnan keinoihin.
        `,
        productionPoster: vkPoster,
        imdbLink: "https://www.imdb.com/title/tt34619229/",
      },
      {
        productionId: 2,
        productionName: "Taivaanranta",
        productionDescription: `Taivaanranta on scifipätkä.`,
        productionPoster: trPoster,
        imdbLink: "https://www.imdb.com/title/tt27600587/",
      },
      {
        productionId: 3,
        productionName: "Pinnat kireenä",
        productionDescription: `Pinnat kireenä kertoo polkupyöristä.`,
        productionPoster: pkPoster,
        imdbLink: "https://www.imdb.com/title/tt28308058/",
      },
    ],
    musicVideosTitle: "Musiikkivideot",
    commericalVideosTitle: "Mainosvideot",
  },
  en: {
    mainTitle: "Productions",
    shortFilmsTitle: "Short films",
    productions: [
      {
        productionId: 1,
        productionName: "Shore of Two Kingdoms",
        productionDescription: `
        A tragedy on the nature of happy ever afters
        and a tale about the loss of two kingdoms.
        `,
        productionPoster: vkPoster,
        imdbLink: "https://www.imdb.com/title/tt34619229/",
      },
      {
        productionId: 2,
        productionName: "Skyline District",
        productionDescription: `
        In a divided city of the future,
        an ambitious street child gets the chance to fulfill his dreams,
        if he is ready to murder the Vice Mayor of the city.
        `,
        productionPoster: trPoster,
        imdbLink: "https://www.imdb.com/title/tt27600587/",
      },
      {
        productionId: 3,
        productionName: "Strained Brakes",
        productionDescription: `
        After her move from the country,
        a young woman finds herself as a target of a city-wide conspiracy,
        where a well-connected network of cyclist wages an unseen war over
        the streets of Helsinki.
        `,
        productionPoster: pkPoster,
        imdbLink: "https://www.imdb.com/title/tt28308058/",
      },
    ],
    musicVideosTitle: "Music videos",
    commericalVideosTitle: "Commercial videos",
  },
};
