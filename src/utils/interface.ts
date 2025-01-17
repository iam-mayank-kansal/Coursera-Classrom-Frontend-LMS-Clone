export interface CourseCardProps {
  title: string;
  rating: number;
  students: string;
  image: string;
  level: string;
  duration: string;
  modules: number;
  link: string;
}


export interface CoursesDataInterface {
  title: string;
  listData: CourseCardProps[];
}

export interface VerifyOtpPayload {
  firstName: string;
  lastName: string;
  phoneNumber: string | number;
  otp: string;
}

export interface TransitionCardProps {
  name: string;
  roleTo: string;
  companyTo: string;
  salary: number;
  imageUrl: string;
}

export interface SinglePepInterface {
  imgUrl: string;
  alt: string;
  heading: string;
  lis: string[];
}

export interface TestimonialInterface {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  companyLogo?: string;
}

export interface TransitionCardInterface {
  image: string;
  name: string;
  transition: string;
  salary: string;
  increase: string;
}

export interface BlogCardInterface {
  title: string;
  description: string;
  date: Date;
  readingTime: string;
  href: string;
  category: string;
  imageUrl: string;
  name: string;
}

export interface EventInterface {
  id: number;
  title: string;
  date: string;
  category: string;
  participants: number;
  status: "Past" | "Live" | "Upcoming";
  imageUrl: string;
  description: string;
  skills: string[];
  price: number;
  instructor?: {
    name: string;
    avatar: string;
    role: string;
  };
}

export interface EventCardInterface {
  event: EventInterface;
}

export interface FilterBarInterface {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export interface SkillBadgeInterface {
  skill: string;
}

export interface ContactCardInterface {
  icon: any;
  title: string;
  content: string | React.ReactNode;
}

export interface CourseCardInterface {
  title: string;
  duration: string;
  hasLiveClass: boolean;
  hasCertification: boolean;
  level: string;
  imageUrl: string;
}

export type SlideType = "hero" | "split" | "feature" | "grid";

export interface Stat {
  label: string;
  value: string;
}

export interface Feature {
  icon: string;
  text: string;
}

export interface GridItem {
  title: string;
  description: string;
  icon: string;
}

export interface SlideBase {
  title: string;
  description: string;
  image: string;
  type: SlideType;
}

export interface SlideIndicatorsProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

export interface SlideHero extends SlideBase {
  type: "hero";
}

export interface SlideSplit extends SlideBase {
  type: "split";
  stats?: Stat[];
}

export interface SlideFeature extends SlideBase {
  type: "feature";
  features?: Feature[];
}

export interface SlideGrid extends SlideBase {
  type: "grid";
  gridItems: GridItem[];
}

export interface SlideContentProps {
  slide: SlideHero | SlideSplit | SlideFeature | SlideGrid;
  isActive: boolean;
}
