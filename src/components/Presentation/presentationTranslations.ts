import { Language } from "../../types/type";

import vkBts1 from "/vk_bts_1.jpg";
import vkBts2 from "/vk_bts_2.jpg";
import vkBts3 from "/vk_bts_3.jpg";
import vkBts4WaterTank from "/vk_bts_4_water_tank.jpg";
import vkBts5WaterTank from "/vk_bts_5_water_tank.jpg";

export interface PresentationTranslations {
  title: string;
  presentation: string;
  behindTheScenes: string;
  horizontalImages1: string[];
  horizontalImages2: string[];
  verticalImages: string[];
  contactUs: string;
}

const horizontalImages1 = [vkBts1, vkBts2];
const horizontalImages2 = [vkBts4WaterTank, vkBts5WaterTank];
const verticalImages = [vkBts3];

export const presentationContent: Record<Language, PresentationTranslations> = {
  fi: {
    title: "Kolmifilmi",
    presentation: `
    Me olemme tuotantoyhtiö, joka erikoistuu mainoselokuviin, yritysvideoihin ja musiikkivideoihin.
    Tarjoamme mediaratkaisuja, joissa elokuvallinen tarinankerronta yhdistyy kohderyhmäsi tarpeisiin.
    `,
    behindTheScenes: "Kulissien takaa",
    horizontalImages1: horizontalImages1,
    horizontalImages2: horizontalImages2,
    verticalImages: verticalImages,
    contactUs: "Ota yhteyttä",
  },
  en: {
    title: "Kolmifilmi",
    presentation: `
    We are a production company that specializes in commercial, business and music videos.
    Providing media solutions where cinematic storytelling connects to you target audiences needs.
    `,
    behindTheScenes: "Behind the scenes",
    horizontalImages1: horizontalImages1,
    horizontalImages2: horizontalImages2,
    verticalImages: verticalImages,
    contactUs: "Contact us",
  },
};
