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
        Meidän Valtakunta on syksyllä 2024 julkaistu lyhyt musikaalielokuva, joka yhdistelee länsimaista satuperinnettä moderneihin musiikkivideokerronnan keinoihin.
        `,
        productionPoster: vkPoster,
        imdbLink: "https://www.imdb.com/title/tt34619229/",
      },
      {
        productionId: 2,
        productionName: "Taivaanranta",
        productionDescription: `Tammikuussa 2023 julkaistu Taivaanranta on lyhyt tieteisfiktioelokuva, joka käsittelee valtaa ja perintöä näyttämönään neonvaloissa kylpevä tulevaisuuden kaupunki.`,
        productionPoster: trPoster,
        imdbLink: "https://www.imdb.com/title/tt27600587/",
      },
      {
        productionId: 3,
        productionName: "Pinnat kireenä",
        productionDescription: `
        Vuoden 2023 joulukuussa julkaistu Pinnat Kireenä on lyhyt toimintakomedia, joka käsittelee internetissä muodostuvia sosiaalisia kuplia satiirin keinoin.
        `,
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
        productionName: "The Shore of Two Kingdoms",
        productionDescription: `
        Released in the fall of 2024 The Shore of Two Kingdoms is a musical short film that combines western fables to the conventions of contemporary music videos.
        `,
        productionPoster: vkPoster,
        imdbLink: "https://www.imdb.com/title/tt34619229/",
      },
      {
        productionId: 2,
        productionName: "Skyline District",
        productionDescription: `
        Released in the beginning of 2023 Skyline District is a short science fiction film about themes of power and legacy set in a future city bathed in neon light.
        `,
        productionPoster: trPoster,
        imdbLink: "https://www.imdb.com/title/tt27600587/",
      },
      {
        productionId: 3,
        productionName: "Strained Brakes",
        productionDescription: `
        Released in the December of 2023 Strained Brakes is a satirical short action comedy about the social media bubbles that form around topics on the internet.
        `,
        productionPoster: pkPoster,
        imdbLink: "https://www.imdb.com/title/tt28308058/",
      },
    ],
    musicVideosTitle: "Music videos",
    commericalVideosTitle: "Commercial videos",
  },
};
