import AppleIcon from '../components/icons/iconApple';
import BodyIcon from '../components/icons/iconBody';
import HangerIcon from '../components/icons/iconHanger';
import HygineIcon from '../components/icons/iconHygine';
import LiquidIcon from '../components/icons/iconLiquid';
import MealIcon from '../components/icons/iconMeal';
import PantsIcon from '../components/icons/iconPants';
import ShirtIcon from '../components/icons/iconShirt';
import SoupIcon from '../components/icons/iconSoup';
import ToothIcon from '../components/icons/iconTooth';

export function getIcon(name, props) {
  switch (name) {
    case 'PLATE':
      return <MealIcon {...props} />;
    case 'HYGIENE':
      return <HygineIcon {...props} />;
    case 'HANGER':
      return <HangerIcon {...props} />;
    case 'APPLE':
      return <AppleIcon {...props} />;
    case 'SOUP':
      return <SoupIcon {...props} />;
    case 'DRINK':
      return <LiquidIcon {...props} />;
    case 'BODY':
      return <BodyIcon {...props} />;
    case 'TOOTH':
      return <ToothIcon {...props} />;
    case 'SHIRT':
      return <ShirtIcon {...props} />;
    case 'PANTS':
      return <PantsIcon {...props} />;
    default:
      return <div></div>;
  }
}
