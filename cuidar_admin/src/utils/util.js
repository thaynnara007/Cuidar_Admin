import AppleIcon from '../components/icons/iconApple';
import BodyIcon from '../components/icons/iconBody';
import CategoryIconDefault from '../components/icons/iconCategoryDefault';
import HangerIcon from '../components/icons/iconHanger';
import HygineIcon from '../components/icons/iconHygine';
import LiquidIcon from '../components/icons/iconLiquid';
import MealIcon from '../components/icons/iconMeal';
import PantsIcon from '../components/icons/iconPants';
import ShirtIcon from '../components/icons/iconShirt';
import SoupIcon from '../components/icons/iconSoup';
import ToothIcon from '../components/icons/iconTooth';
import {
  APPLE_ICON,
  BODY_ICON,
  DRINK_ICON,
  HANGER_ICON,
  HYGIENE_ICON,
  PANTS_ICON,
  PLATE_ICON,
  SHIRT_ICON,
  SOUP_ICON,
  TOOTH_ICON,
} from './constants';

export function getIcon(name, props) {
  switch (name) {
    case PLATE_ICON:
      return <MealIcon {...props} />;
    case HYGIENE_ICON:
      return <HygineIcon {...props} />;
    case HANGER_ICON:
      return <HangerIcon {...props} />;
    case APPLE_ICON:
      return <AppleIcon {...props} />;
    case SOUP_ICON:
      return <SoupIcon {...props} />;
    case DRINK_ICON:
      return <LiquidIcon {...props} />;
    case BODY_ICON:
      return <BodyIcon {...props} />;
    case TOOTH_ICON:
      return <ToothIcon {...props} />;
    case SHIRT_ICON:
      return <ShirtIcon {...props} />;
    case PANTS_ICON:
      return <PantsIcon {...props} />;
    default:
      return <CategoryIconDefault {...props} />;
  }
}

export function getAllIcons(props) {
  return [
    <MealIcon {...(props.meal ?? {})} />,
    <HygineIcon {...(props.hygine ?? {})} />,
    <HangerIcon {...(props.hanger ?? {})} />,
    <AppleIcon {...(props.apple ?? {})} />,
    <SoupIcon {...(props.soup ?? {})} />,
    <LiquidIcon {...(props.liquid ?? {})} />,
    <BodyIcon {...(props.body ?? {})} />,
    <ToothIcon {...(props.tooth ?? {})} />,
    <ShirtIcon {...(props.shirt ?? {})} />,
    <PantsIcon {...(props.pants ?? {})} />,
    <CategoryIconDefault {...(props.default ?? {})} />,
  ];
}
