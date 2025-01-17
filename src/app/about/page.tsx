import React from "react";
import Header from "@/components/about-page/header/Header";
import Missions from "@/components/about-page/missions/Missions";
import Stats from "@/components/about-page/stats/Stats";
import Team from "@/components/about-page/team/Team";
import Values from "@/components/about-page/values/Values";
import Cta from "@/components/about-page/cta/Cta";
export default function About() {
  return (
    <>
      {/* Hero Section */}
      <Header />
      {/* Mission Section */}
      <Missions />

      {/* Stats Section */}
      <Stats />

      {/* Team Section */}
      <Team />

      {/* Values Section */}
      <Values />

      {/* CTA Section */}
      <Cta />
    </>
  );
}