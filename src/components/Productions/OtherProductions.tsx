import { OtherProductionsTranslation } from "./productionsTranslations";
import "./OtherProductions.css";

interface OtherProductionsProps {
  productions: OtherProductionsTranslation[];
}

export function OtherProductions({ productions }: OtherProductionsProps) {
  return (
    <div className="other-productions-container">
      {productions.map((production) => {
        return (
          <div className="other-production">
            <div className="other-production-description">
              <h3>{production.productionName}</h3>
              <p>{production.productionDescription}</p>
            </div>
            <div className="other-production-images">
              {production.productionImages.map((image, index) => {
                return <img key={index} src={image} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
