import { HiOutlineSparkles } from "react-icons/hi";

export default function Header({ headerData }: { headerData: any }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#02203c] to-[#001528]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-1.5 bg-[#2ec866]/20 backdrop-blur-sm rounded-full text-[#2ec866] text-sm font-medium">
                <HiOutlineSparkles className="w-4 h-4 mr-2" />
                {headerData.subHeading}
              </div>
              <h1 className="text-header-heading leading-header-line-height font-bold text-white">
                {headerData.heading}
              </h1>
              <p className="text-para leading-para-line-height text-gray-200 max-w-2xl">
                {headerData.para}
              </p>
            </div>

            {/* Stats/Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {headerData.subPoints.map((val: any) => (
                <div
                  className="bg-[#0a3049]/50 backdrop-blur-sm rounded-xl p-4 border border-[#2ec866]/20 hover:border-[#2ec866]/40 transition-colors"
                  key={val.heading1}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#2ec866]/10 rounded-lg">
                      <val.svg className="w-6 h-6 text-[#2ec866]" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {val.heading1}
                      </div>
                      <div className="text-sm text-gray-300">
                        {val.heading2}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative lg:ml-auto">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#2ec866] to-[#1a864a] rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative flex">
                <img
                  src={headerData.imageUrl}
                  alt="Web Development"
                  className="rounded-2xl shadow-2xl w-[380px] h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
