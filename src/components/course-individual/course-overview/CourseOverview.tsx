import Overview from "./Overview";
import Details from "./Details";

export default function CourseOverview() {
  return (
    <div className="grid lg:grid-cols-3 gap-8 px-side-padding mb-20">
      <Overview />
      <Details />
    </div>
  );
}
