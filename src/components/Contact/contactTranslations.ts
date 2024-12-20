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
        title: "Toimitusjohtaja",
        email: "sebastian.kara@kolmifilmi.com",
        profile: sebastianKaraProfile,
      },
      {
        id: 2,
        name: "Valtti Hyvärinen",
        title: "Luovan kehityksen johtaja",
        email: "valtti.hyvarinen@kolmifilmi.com",
        profile: valttiHyvarinenProfile,
      },
      {
        id: 3,
        name: "Verneri Kankaanpää",
        title: "Tekninen johtaja",
        email: "verneri.kankaanpaa@kolmifilmi.com",
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
        title: "CEO / Head of Partnerships",
        email: "sebastian.kara@kolmifilmi.com",
        profile: sebastianKaraProfile,
      },
      {
        id: 2,
        name: "Valtti Hyvärinen",
        title: "Principal / Head of Creative Development",
        email: "valtti.hyvarinen@kolmifilmi.com",
        profile: valttiHyvarinenProfile,
      },
      {
        id: 3,
        name: "Verneri Kankaanpää",
        title: "Tech Supervisor / Head of Post Production",
        email: "verneri.kankaanpaa@kolmifilmi.com",
        profile: verneriKankaanpaaProfile,
      },
    ],
  },
};
