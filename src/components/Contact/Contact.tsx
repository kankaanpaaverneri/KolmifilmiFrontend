import { useEffect, useState } from "react";
import "./Contact.css";
import {
  contactTranslations,
  ContactTranslations,
} from "./contactTranslations";
import { useAppSelector } from "../../hooks/hooks";
import BusinessPartner from "./BusinessPartner";

function Contact() {
  const selectedLanguage = useAppSelector(
    (state) => state.languageReducer.selectedLanguage,
  );
  const [contactContent, setContactContent] = useState<ContactTranslations>(
    contactTranslations[selectedLanguage] || contactTranslations["fi"],
  );

  useEffect(() => {
    if (selectedLanguage === "fi" || selectedLanguage === "en") {
      setContactContent(contactTranslations[selectedLanguage]);
    }
  }, [selectedLanguage]);

  return (
    <div className="contact-container">
      <h1>{contactContent.mainTitle}</h1>
      <div className="business-partners-container">
        {contactContent.businessPartners.map((partner) => {
          return <BusinessPartner key={partner.id} businessPartner={partner} />;
        })}
      </div>
    </div>
  );
}

export default Contact;
