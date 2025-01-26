import { Language } from "../../types/type";
import sebastianKaraProfile from "/sebastian_kara_profile.jpg";
import valttiHyvarinenProfile from "/valtti_hyvarinen_profile.jpg";
import verneriKankaanpaaProfile from "/verneri_kankaanpaa_profile.jpg";

export interface BusinessPartnerType {
  id: number;
  name: string;
  title: string;
  email: string;
  profile: string;
}

export interface ContactTranslations {
  mainTitle: string;
  businessPartners: BusinessPartnerType[];
}

export const contactTranslations: Record<Language, ContactTranslations> = {
  fi: {
    mainTitle: "Ota yhteyttä",
    businessPartners: [
      {
        id: 1,
        name: "Sebastian Kara",
        title: "Toimitusjohtaja / Asiakkuudet",
        email: "sebastiankara@kolmifilmi.com",
        profile: sebastianKaraProfile,
      },
      {
        id: 2,
        name: "Valtti Hyvärinen",
        title: "Luova johtaja",
        email: "valttihyvarinen@kolmifilmi.com",
        profile: valttiHyvarinenProfile,
      },
      {
        id: 3,
        name: "Verneri Kankaanpää",
        title: "Tekninen vastaava",
        email: "vernerikankaanpaa@kolmifilmi.com",
        profile: verneriKankaanpaaProfile,
      },
    ],
  },
  en: {
    mainTitle: "Contact us",
    businessPartners: [
      {
        id: 1,
        name: "Sebastian Kara",
        title: "CEO / Partnerships",
        email: "sebastiankara@kolmifilmi.com",
        profile: sebastianKaraProfile,
      },
      {
        id: 2,
        name: "Valtti Hyvärinen",
        title: "Creative Director",
        email: "valttihyvarinen@kolmifilmi.com",
        profile: valttiHyvarinenProfile,
      },
      {
        id: 3,
        name: "Verneri Kankaanpää",
        title: "Tech Supervisor",
        email: "vernerikankaanpaa@kolmifilmi.com",
        profile: verneriKankaanpaaProfile,
      },
    ],
  },
};
