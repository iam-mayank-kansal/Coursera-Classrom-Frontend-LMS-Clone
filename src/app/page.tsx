import IndustryLeading from "@/components/home-page/industry-leading/IndustryLeading";
import InterestedIn from "@/components/home-page/interested-in/InterestedIn";
import PlacementAndSuccess from "@/components/home-page/placement-and-success/PlacementAndSuccess";
import Courses from "@/components/home-page/courses/Courses";
import Header from "@/components/home-page/header/Header";
import ModernSkills from "@/components/home-page/modern-skills/ModernSkills";
import TopTiesCompanies from "@/components/home-page/top-tier-companies/TopTierCompanies";
import SkillsyardAdvantages from "@/components/home-page/skillsyard-advantages/SkillsyardAdvantages";
import SkillsyardProcess from "@/components/home-page/skillsyard-process/SkillsyardProcess";
import SelfPaced from "@/components/home-page/self-paced/SelfPaced";
import WhatStudentSays from "@/components/home-page/what-student-says/WhatStudentSays";
import Faq from "@/components/home-page/faq/Faq";
import GotQuestions from "@/components/home-page/got-questions/GotQuestions";

export default function Home() {
  return (
    <>
      <Header />
      <IndustryLeading />
      <Courses />
      <TopTiesCompanies />
      {/* <SelfPaced /> */}
      <InterestedIn />
      <SkillsyardProcess />
      <SkillsyardAdvantages />
      <PlacementAndSuccess />
      <WhatStudentSays />
      <ModernSkills />
      <Faq />
      <GotQuestions />
    </>
  );
}
