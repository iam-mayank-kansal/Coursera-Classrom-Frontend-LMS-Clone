import Image from "next/image";

const NetworkingSession = () => {
  return (
    <div className="bg-gray-100 py-10 rounded-lg flex flex-col items-center justify-between px-side-padding mx-auto max-w-[90%] my-20 md:flex-row md:gap-5">
      <div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4 py-6">
          Networking sessions - GL Confluence
        </h2>
        <ul className="text-gray-700 space-y-2 mb-8">
          <li className="flex items-center text-[20px]">
            <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full inline-block mr-2 text-[40px]"></span>
            Connect with like-minded professionals
          </li>
          <li className="flex items-center text-[20px]">
            <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full inline-block mr-2"></span>
            Grow your professional network
          </li>
        </ul>

        <div className="text-center">
          <p className="text-gray-700 mb-2 text-[20px] py-6 ">
            Our learners work at top companies
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Company logos */}
            <Image
              src="https://d1vwxdpzbgdqj.cloudfront.net/excelerate/excelerate-career-fairs-section.png"
              alt="Microsoft"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>

      <div className="my-6">
        <Image
          src="/images/NetworkSessions.jpg"
          alt="Networking session"
          width={500}
          height={250}
          className="rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default NetworkingSession;
