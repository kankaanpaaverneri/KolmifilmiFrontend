import { Language } from "../../types/type";

export interface ShortFilmProductionTranslation {
  productionId: number;
  productionName: string;
  productionDescription: string;
  productionPoster: string;
  imdbLink: string;
}

export interface OtherProductionsTranslation {
  productionId: number;
  productionName: string;
  productionDescription: string;
  productionImages: string[];
}

export interface ProductionsTranslations {
  mainTitle: string;
  shortFilmsTitle: string;
  musicVideosTitle: string;
  commericalVideosTitle: string;
  shortfilmProductions: ShortFilmProductionTranslation[];
  musicVideoProductions: OtherProductionsTranslation[];
  commercialVideoProductions: OtherProductionsTranslation[];
}

// Poster imports
import vkPoster from "/vk_poster_small.png";
import pkPoster from "/pk_poster_small.png";
import trPoster from "/tr_poster_small.png";

//Music video screenshots
import physicalShot1 from "/physical_shot_1.png";
import physicalShot2 from "/physical_shot_2.png";
import fpShot1 from "/fp_shot_1.png";
import fpShot2 from "/fp_shot_2.png";

const physicalImages = [physicalShot1, physicalShot2];
const fpImages = [fpShot1, fpShot2];

export const productionsTranslations: Record<
  Language,
  ProductionsTranslations
> = {
  fi: {
    mainTitle: "Tuotannot",
    shortFilmsTitle: "Lyhytelokuvat",
    shortfilmProductions: [
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
    musicVideoProductions: [
      {
        productionId: 1,
        productionName: "Physical",
        productionDescription: `Improvisaatiokomiikkaa ja tanssia yhdistelevä ”Let’s Get Physical” on Kolmifilmin keväällä 2024 toteuttama musiikkivideohanke stand up -koomikolle.`,
        productionImages: physicalImages,
      },
    ],
    commercialVideoProductions: [
      {
        productionId: 1,
        productionName: "Fiksuposti",
        productionDescription: `Toteutimme syksyllä 2023 Fiksupostin Soittopyyntöpalvelulle mainoksen, joka käsittelee yhtä yrittäjyyden yleisimmistä kompastuskivistä komedian keinoin.`,
        productionImages: fpImages,
      },
    ],
  },
  en: {
    mainTitle: "Productions",
    shortFilmsTitle: "Short films",
    shortfilmProductions: [
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
    musicVideoProductions: [
      {
        productionId: 1,
        productionName: "Physical",
        productionDescription: `Combining improvisational comedy and dance ”Let’s Get Physical” is a music video project for a stand-up comedian, produced by Kolmifilmi in the spring of 2024.`,
        productionImages: physicalImages,
      },
    ],
    commercialVideoProductions: [
      {
        productionId: 1,
        productionName: "Fiksuposti",
        productionDescription: `In the fall of 2023, we created an advertisement for "Fiksuposti" Call Request Service, which addresses one of the most common pitfalls of entrepreneurship through comedy.`,
        productionImages: fpImages,
      },
    ],
  },
};
