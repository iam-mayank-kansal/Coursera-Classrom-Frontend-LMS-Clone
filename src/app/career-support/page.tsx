import Header from "@/components/career-support/header/Header";
import Hiring from "@/components/career-support/hiring/Hiring";
import CareerFairs from "@/components/career-support/career-fairs/CareerFairs";
import CareerTransition from "@/components/career-support/career-transition/CareerTransition";
import CareerPrep from "@/components/career-support/career-prep/CareerPrep";
import NetworkSessions from "@/components/career-support/network-sessions/NetworkSessions";

export default function Page() {
  return (
    <>
      <Header />
      <Hiring />
      <CareerFairs />
      <CareerTransition />
      <CareerPrep />
      <NetworkSessions />
    </>
  );
}
