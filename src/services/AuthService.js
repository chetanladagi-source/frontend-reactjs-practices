import { LOGIN_CREDENTIAL } from "../config/login";
import { delay } from "../utils/delay";

export const validateLogin = async (data) => {
  await delay(3000);
  if (
    data.email === LOGIN_CREDENTIAL.EMAIL &&
    data.password === LOGIN_CREDENTIAL.PASSWORD
  ) {
    return {
      success: true,
      token: "abc123xyz",
      user: {
        id: 1,
        name: "Chetan",
      },
    };
  }

  throw {
    message: "Invalid email or password",
  };
};
