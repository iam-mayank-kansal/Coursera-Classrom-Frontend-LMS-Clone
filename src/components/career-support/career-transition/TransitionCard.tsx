import { TransitionCardProps } from "@/utils/interface";

export default function TransitionCard({
  name,
  roleTo,
  companyTo,
  salary,
  imageUrl,
}: TransitionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md py-8 px-10 w-full m-2 md:w-[350px] lg:w-[300px]">
      <img
        src={imageUrl}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h5 className="text-center text-h5-heading font-h5-weight leading-h5-line-height">
        {name}
      </h5>
      <p className="text-center">
        Salary : <span>{salary} LPA</span>
      </p>
      <p className="text-center text-all-para-color font-medium">{roleTo}</p>
      <img src={companyTo} alt={companyTo} className="h-10 mx-auto my-3" />
    </div>
  );
}
