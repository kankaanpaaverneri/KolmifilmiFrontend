import { BusinessPartnerType } from "./contactTranslations";
import "./BusinessPartner.css";
interface BusinessPartnerProps {
  businessPartner: BusinessPartnerType;
}

function BusinessPartner({ businessPartner }: BusinessPartnerProps) {
  return (
    <div className="business-partner-container">
      <img src={businessPartner.profile} />
      <p>{businessPartner.name}</p>
      <p>{businessPartner.title}</p>
      <p>{businessPartner.email}</p>
    </div>
  );
}

export default BusinessPartner;
