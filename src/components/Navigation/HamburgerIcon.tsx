import "./HamburgerIcon.css";

interface HamburgerIconProps {
  onClick: () => void;
  navVisible: boolean;
}

function HamburgerIcon({ onClick, navVisible }: HamburgerIconProps) {
  return (
    <button
      onClick={onClick}
      aria-controls="primary-navigation"
      aria-expanded={navVisible}
      className={`hamburger-icon ${navVisible ? "open" : ""}`}
    >
      <div className={"sandwich"}></div>
    </button>
  );
}

export default HamburgerIcon;
