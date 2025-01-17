import Cta from "@/components/success-stories/cta/Cta";
import FeaturedStories from "@/components/success-stories/featured-stories/FeaturedStories";
import CompanyLogos from "@/components/success-stories/success-companies/Companies";
import Header from "@/components/success-stories/success-header/Header";
import Stats from "@/components/success-stories/success-stats/Stats";

export default function SuccessStories() {
  return (
    <>
      <Header />
      <Stats />
      <CompanyLogos />
      {/* <FeaturedStories /> */}
      <Cta />
    </>
  );
}
