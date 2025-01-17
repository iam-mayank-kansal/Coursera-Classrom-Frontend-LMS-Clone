import { VerifyOtpPayload } from "./interface";

const BASE_URL = "http://localhost:8080/api/auth";

export async function verifyOtp(payload: VerifyOtpPayload): Promise<any> {
  const response = await fetch(`${BASE_URL}/verify-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Verification failed.");
  }

  return response.json();
}


export const sendOtp = async (phoneNumber: string): Promise<Response> => {
  try {
    const response = await fetch(`${BASE_URL}/send-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber }),
    });

    return response;
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw error;
  }
};

export const googleLogin = async (googleToken: string): Promise<Response> => {
  try {
    const response = await fetch(
      `${BASE_URL}/google-login?access_token=${googleToken}`,
      {
        method: "GET",
      }
    );

    return response;
  } catch (error) {
    console.error("Error during Google login:", error);
    throw error;
  }
};
