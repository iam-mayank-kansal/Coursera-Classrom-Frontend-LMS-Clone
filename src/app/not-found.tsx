import IconTitle from "@/components/error-page/icon-title/IconTitle";
import CodeDetails from "@/components/error-page/code-details/CodeDetails";
import Suggestions from "@/components/error-page/suggestions/Suggestions";
import ActionButtons from "@/components/error-page/actions-buttons/ActionButtons";
import SupportLinks from "@/components/error-page/support-links/SupportLinks";

export default function Error() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
          <IconTitle />
          <CodeDetails />
          <Suggestions />
          <ActionButtons />
        </div>
        <SupportLinks />
      </div>
    </div>
  );
}
