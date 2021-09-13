import AppleIcon from '../components/icons/iconApple';
import BabyCarriageIcon from '../components/icons/iconBabyCarriage';
import BallIcon from '../components/icons/iconBall';
import BandAidIcon from '../components/icons/iconBandAid';
import BedIcon from '../components/icons/iconBed';
import BodyIcon from '../components/icons/iconBody';
import BookIcon from '../components/icons/iconBook';
import CatIcon from '../components/icons/iconCat';
import CategoryIconDefault from '../components/icons/iconCategoryDefault';
import DogIcon from '../components/icons/iconDog';
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
  BABBY_CARRIAGE_ICON,
  BALL_ICON,
  BANDAID_ICON,
  BED_ICON,
  BODY_ICON,
  BOOK_ICON,
  CAT_ICON,
  DEFAULT_ICON,
  DOG_ICON,
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
    case BABBY_CARRIAGE_ICON:
      return <BabyCarriageIcon {...props} />;
    case BALL_ICON:
      return <BallIcon {...props} />;
    case DOG_ICON:
      return <DogIcon {...props} />;
    default:
      return <CategoryIconDefault {...props} />;
  }
}

export function getAllIcons() {
  return [
    { icon: <MealIcon />, value: PLATE_ICON },
    { icon: <HygineIcon />, value: HYGIENE_ICON },
    { icon: <HangerIcon />, value: HANGER_ICON },
    { icon: <AppleIcon />, value: APPLE_ICON },
    { icon: <SoupIcon />, value: SOUP_ICON },
    { icon: <LiquidIcon />, value: DRINK_ICON },
    { icon: <BodyIcon />, value: BODY_ICON },
    { icon: <ToothIcon />, value: TOOTH_ICON },
    { icon: <ShirtIcon />, value: SHIRT_ICON },
    { icon: <PantsIcon />, value: PANTS_ICON },
    { icon: <BabyCarriageIcon />, value: BABBY_CARRIAGE_ICON },
    { icon: <BallIcon />, value: BALL_ICON },
    { icon: <DogIcon />, value: DOG_ICON },
    { icon: <CatIcon />, value: CAT_ICON },
    { icon: <BandAidIcon />, value: BANDAID_ICON },
    { icon: <BedIcon />, value: BED_ICON },
    { icon: <BookIcon />, value: BOOK_ICON },
    { icon: <CategoryIconDefault />, value: DEFAULT_ICON },
  ];
}
