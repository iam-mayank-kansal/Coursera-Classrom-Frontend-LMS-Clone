import { useAuthForms } from "@/store/auth-forms";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useNavModel, useUserLoggedIn } from "@/store/nav-model";
import classNames from "classnames";
import Image from "next/image";
import { verifyOtp } from "@/utils/api-utils";

export default function Verification() {
  const { onScreen, setOnScreen } = useNavModel();
  const [values, setValues] = useState<string[]>(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const { number, firstName, setFirstName, lastName, setLastName } =
    useAuthForms();
  const { updateUserLoggedInStatus } = useUserLoggedIn();
  const router = useRouter();
  const { closeIsOpen } = useNavModel();
  const time = 60;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newValues = [...values];
    newValues[index] = e.target.value.slice(0, 1);
    setValues(newValues);

    if (newValues[index] && index < 3) {
      document.getElementById(`input-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      document.getElementById(`input-${index - 1}`)?.focus();
    }
  };

  useEffect(() => {
    const intervalTimeout = 1000;
    if (onScreen === 2) {
      setTimeLeft(time);

      const intervalId = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, intervalTimeout);

      return () => clearInterval(intervalId);
    }
  }, [onScreen]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    const otp = values.join("");
    if (otp.length !== 4) {
      alert("Please enter a valid 4-digit OTP.");
      return;
    }
    try {
      const response = await verifyOtp({
        firstName,
        lastName,
        phoneNumber: number,
        otp,
      });

      console.log("Verification successful:", response);

      updateUserLoggedInStatus(true);
      alert("Sign up successful!");

      closeIsOpen();
      router.push("/");
    } catch (error: any) {
      console.error("Verification failed:", error);
      alert(error.message || "Invalid OTP or OTP expired.");
      setOnScreen(0);
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div
      className={classNames(
        "flex flex-col justify-around items-center gap-5 px-side-padding absolute top-0 w-full h-full bg-white duration-200 md:flex-row",
        {
          "left-0": onScreen === 2,
        },
        { "left-full": onScreen !== 2 }
      )}
    >
      <div className="w-[200px] h-[200px] relative md:h-[250px] lg:w-[350px]">
        <Image
          className="h-full w-full object-cover"
          src="/images/navbar-verification.avif"
          fill
          alt="Verification"
        />
      </div>
      <form className="md:w-[45%]" onSubmit={handleVerification}>
        <div className="flex flex-col justify-center gap-1">
          <h6 className="text-center font-h6-weight text-lg leading-h6-line-height text-primary-color">
            VERIFICATION
          </h6>
          <div className="flex flex-col gap-1">
            <label htmlFor="firstName">Enter First Name</label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border-[1px] w-full rounded-md py-1.5 border-[#999] pl-1"
              type="text"
              id="firstName"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="lastName">Enter Last Name</label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border-[1px] w-full rounded-md py-1.5 border-[#999] pl-1"
              type="text"
              id="lastName"
            />
          </div>
          <label>Enter Your Verification Code</label>
          <div className="flex gap-4 justify-start mt-1">
            {values.map((value, index) => (
              <input
                key={index}
                id={`input-${index}`}
                type="number"
                value={value}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                max="9"
                className={`h-[40px] w-[40px] border-2 rounded-md p-2 text-center font-semibold ${
                  value
                    ? "border-primary-color text-primary-color"
                    : "border-[#999]"
                }`}
                maxLength={1}
              />
            ))}
          </div>
          <p className="font-medium">{formatTime(timeLeft)}</p>
          <section className="font-medium">
            We sent the verification code to your number{" "}
            <span className="text-primary-color">
              ******{number.toString().slice(-4)}
            </span>
          </section>
          {/* <p className="font-medium underline text-primary-color">
            I didn't receive the code? Send again
          </p> */}
          <button className="font-semibold text-white bg-[#068932] w-full my-4 py-3 px-6 rounded uppercase">
            Verify
          </button>
        </div>
      </form>
    </div>
  );
}
