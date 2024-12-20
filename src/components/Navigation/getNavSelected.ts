import { NavigationIdentifier } from "../../types/enum";
import { paths } from "../../paths/paths";

export default function getNavSelected(
  locationPath: string,
): NavigationIdentifier {
  let navSelected = NavigationIdentifier.NONE;
  switch (locationPath) {
    case paths.presentation:
      navSelected = NavigationIdentifier.PRESENTATION;
      break;
    case paths.productions:
      navSelected = NavigationIdentifier.PRODUCTIONS;
      break;
    case paths.contact:
      navSelected = NavigationIdentifier.CONTACT;
      break;
    case paths.notFound:
      navSelected = NavigationIdentifier.NONE;
      break;
    case paths.root:
      navSelected = NavigationIdentifier.PRESENTATION;
      break;
    default:
      navSelected = NavigationIdentifier.NONE;
      break;
  }
  return navSelected;
}
