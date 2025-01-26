import { PresentationTranslations } from "./presentationTranslations";

interface ImagesContainerProps {
  presentation: PresentationTranslations;
}

export default function ImagesContainer({
  presentation,
}: ImagesContainerProps) {
  return (
    <div className="images-container">
      <div className="images-header">
        <h1>{presentation.behindTheScenes}</h1>
      </div>
      <div className="horizontal-images-list">
        {presentation.horizontalImages1.map((image, index) => {
          return <img key={index} src={image} />;
        })}
      </div>
      <div className="horizontal-images-list">
        {presentation.horizontalImages2.map((image, index) => {
          return <img key={index} src={image} />;
        })}
      </div>
      <div className="vertical-images-list">
        {presentation.verticalImages.map((image, index) => {
          return <img key={index} src={image} />;
        })}
      </div>
    </div>
  );
}
