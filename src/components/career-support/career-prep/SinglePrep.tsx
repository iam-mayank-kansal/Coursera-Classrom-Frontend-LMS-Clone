import { SinglePepInterface } from "@/utils/interface";

export default function SinglePrep({
  imgUrl,
  alt,
  heading,
  lis,
}: SinglePepInterface) {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-20">
      <img
        src={imgUrl}
        alt={alt}
        className="w-full lg:w-1/4 rounded-lg shadow-md"
      />
      <div className="flex-1">
        <h3 className="text-gray-600 text-2xl font-bold  mb-4">{heading}</h3>
        <ul className="list-disc pl-8 text-gray-600 space-y-3 text-[18px] ">
          {lis.map((text: string, idx: number) => (
            <li key={"text-" + idx}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
