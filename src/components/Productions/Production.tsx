import { ProductionTranslation } from "./productionsTranslations";
import "./Production.css";

interface ProductionProps {
  production: ProductionTranslation;
}

function Production({ production }: ProductionProps) {
  return (
    <div className="production">
      <div className="production-poster">
        <img src={production.productionPoster} />
      </div>
      <div className="production-details">
        <h3>{production.productionName}</h3>
        <p>{production.productionDescription}</p>
      </div>
      <div className="imdb-button-container">
        <a target="_blank" href={production.imdbLink}>
          <button>IMDb</button>
        </a>
      </div>
    </div>
  );
}

export default Production;
