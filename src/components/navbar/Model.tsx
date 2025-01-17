import { useState, useEffect } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { useNavModel } from "@/store/nav-model";
import { useAuthForms } from "@/store/auth-forms";
import { GoogleLogin } from "@react-oauth/google";
import Verification from "./Verification";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { googleLogin, sendOtp } from "@/utils/api-utils";

const Modal = () => {
  const { onScreen, setOnScreen } = useNavModel();
  const { number, setNumber, setFirstName, setLastName } = useAuthForms();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (onScreen === 1) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [onScreen]);

  useEffect(() => {
    if (onScreen === 0) {
      setNumber("");
    }
  }, [onScreen]);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedNumber = number.toString().trim();

    if (trimmedNumber.length === 10) {
      try {
        const response = await sendOtp(trimmedNumber);
        if (response.ok) {
          setOnScreen(2);
        } else {
          alert("Something went wrong");
          setOnScreen(0);
        }
      } catch (error) {
        console.error("Error in login submit:", error);
      }
    } else {
      alert("Enter a valid 10-digit number");
    }
  };

  const handleGoogleLoginSuccess = async (response: any) => {
    const google_token = response.credential;

    try {
      setIsLoading(true);
      const res = await googleLogin(google_token);

      if (!res.ok) {
        const data = await res.json();
        setError(data.message || "Google login failed. Please try again.");
        return;
      }

      const data = await res.json();
      console.log("Google Login successful:", data);

      // Store the access token in localStorage
      localStorage.setItem("access_token", data.access_token);

      // Redirected user to the home page
      router.push("/");
    } catch (err) {
      console.error("Error during Google login:", err);
      setError("An error occurred during Google login. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLoginFailure = () => {
    console.error("Login failed");
    setError("Google login failed. Please try again.");
  };

  if (!onScreen) return null;

  return (
    <div className="bg-[#00000088] h-screen w-full fixed inset-0 z-50 flex items-center justify-center select-none">
      {onScreen && (
        <div className="shadow-lg w-[60%] items-center justify-center rounded-md bg-white relative overflow-hidden">
          <h1 className="text-center mt-5 text-h1-heading font-h1-weight text-all-heading-color">
            Login !
          </h1>
          <div className="flex flex-col-reverse justify-around items-center md:flex-row">
            <div className="p-8 rounded-lg md:w-[45%]">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-20"
                onClick={() => {
                  setOnScreen(0);
                  setFirstName("");
                  setLastName("");
                }}
              >
                ✕
              </button>
              <form
                className="flex flex-col gap-2"
                onSubmit={handleLoginSubmit}
              >
                <div className="flex flex-col gap-2 mt-2">
                  <label className="font-medium" htmlFor="number">
                    Number
                  </label>
                  <div className="w-full relative">
                    <input
                      className="border-2 rounded-lg border-[#9999998e] w-full p-2"
                      id="number"
                      type="number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                    <FiPhoneCall
                      className="absolute top-1/2 right-2 -translate-y-1/2"
                      fontSize={20}
                      color="#999"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="font-semibold text-white bg-[#068932] w-full my-4 py-4 px-6 rounded uppercase"
                >
                  Login
                </button>
              </form>
              <div>
                <div className="flex items-center">
                  <span className="h-[2px] bg-black w-full" />
                  <span className="w-full text-center">Or login with</span>
                  <span className="h-[2px] bg-black w-full" />
                </div>
                <div className="flex items-center justify-center gap-5 mt-5">
                  <GoogleLogin
                    onSuccess={handleGoogleLoginSuccess}
                    onError={handleGoogleLoginFailure}
                    useOneTap
                  />
                </div>
                {error && (
                  <p className="text-red-500 text-center mt-3">{error}</p>
                )}
              </div>
            </div>
            <div className="w-full md:w-[40%]">
              <div className="relative w-full h-[200px]">
                <Image
                  className="w-full h-full object-cover"
                  src="/images/navbar-model.avif"
                  alt="Login Illustration"
                  fill
                />
              </div>
            </div>
          </div>
          <Verification />
        </div>
      )}
    </div>
  );
};

export default Modal;
