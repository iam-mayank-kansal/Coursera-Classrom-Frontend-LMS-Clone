import { TestimonialInterface } from '@/utils/interface';
import React from 'react';
import { BsQuote } from 'react-icons/bs';

export const Testimonial = ({ name, role, company, image, quote, companyLogo }: TestimonialInterface) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
    <BsQuote className="w-10 h-10 text-indigo-600 mb-4" />
    <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">{quote}</p>
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <img src={image} alt={name} className="w-14 h-14 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-gray-600 text-sm">{role} at {company}</p>
        </div>
      </div>
      {companyLogo && (
        <img src={companyLogo} alt={company} className="h-8 object-contain" />
      )}
    </div>
  </div>
);