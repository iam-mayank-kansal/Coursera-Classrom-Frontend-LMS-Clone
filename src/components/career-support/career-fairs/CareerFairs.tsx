"use client";
const CareerFairs = () => {
  return (
    <div className="min-h-screen grid px-side-padding">
      <div className="bg-white rounded-lg flex flex-col p-6 items-center justify-center gap-20 lg:flex-row">
        <div>
          <h1 className="text-all-heading-color text-h1-heading font-h1-weight mb-4">
            Career Fairs
          </h1>
          <p className="text-all-para-color mb-20 text-para max-w-[600px] leading-para-line-height">
            Participate in exclusive recruitment drives with the best companies
            across industries. Get access to a wide range of jobs and choose the
            right opportunity for you.
          </p>

          <ul className="mb-12 space-y-2 list-disc text-xl ml-8">
            <li className="text-purple-700">
              Career fairs and recruitment drives exclusive to Great Learners
            </li>
            <li className="text-purple-700">Organized at regular intervals</li>
          </ul>
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-10 text-gray-600">
              Some top recruiters
            </h3>
            <div className="flex space-x-4 ">
              <img
                src="https://d1vwxdpzbgdqj.cloudfront.net/excelerate/excelerate-career-fairs-section.png"
                alt="IBM"
                className="w-[500px] and h-[150px]"
              />
            </div>
          </div>
        </div>
        <div className="m-auto">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-fit">
              <div className="bg-yellow-200 p-4 rounded text-center w-48">
                <p className="text-3xl font-bold">100+</p>
                <p className="text-gray-700">Career Fairs</p>
              </div>
              <div className="bg-pink-200 p-4 rounded text-center">
                <p className="text-3xl font-bold">5</p>
                <p className="text-gray-700">Cities</p>
              </div>
              <div className="bg-purple-200 p-4 rounded text-center md:col-span-2">
                <p className="text-3xl font-bold">3300+</p>
                <p className="text-gray-700">Hiring Companies</p>
              </div>
            </div>
          </div>
          <div className="mt-8 md:w-[500px]">
            <video className="w-full rounded-lg shadow-md" autoPlay muted loop>
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerFairs;
