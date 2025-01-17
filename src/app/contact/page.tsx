import Form from "@/components/contact/form/Form";
import Header from "@/components/contact/header/Header";
import Map from "@/components/contact/map/Map";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50">
      <Header />
      <Form />
      <Map />
    </div>
  );
}
