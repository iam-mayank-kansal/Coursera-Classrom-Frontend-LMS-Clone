import EventHero from "@/components/event/hero/EventHero";
import EventStats from "@/components/event/stats/EventStats";
import ExploreEvent from "@/components/event/explore-event/ExploreEvents";

export default function Event() {
  return (
    <>
      <EventHero />
      <EventStats />
      <ExploreEvent />
    </>
  );
}
