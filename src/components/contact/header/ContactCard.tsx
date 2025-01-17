import { ContactCardInterface } from "@/utils/interface";
import React from "react";

export default function ContactCard({
  icon: Icon,
  title,
  content,
}: ContactCardInterface) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-start space-y-4">
      <div className="p-3 bg-indigo-50 rounded-lg">
        <Icon className="w-6 h-6 text-indigo-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}
