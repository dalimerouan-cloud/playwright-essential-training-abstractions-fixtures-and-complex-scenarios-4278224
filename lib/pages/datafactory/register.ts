import { request, expect } from "@playwright/test";
import process from "process";

export async function registerUser(email: string, password: string) {
  const apiUrl = process.env.API_URL;
  const createRequestContext = await request.newContext();
  const response = await createRequestContext.post(apiUrl + "/auth/register", {
    data: {
      first_name: "marven2",
      last_name: "dali2",
      dob: "2000-05-15",
      country: "US",
      postcode: "H4G 1S1",
      street: "verdun",
      house_number: "42",
      city: "montreal",
      state: "Qc",
      phone: "5555555555",
      email: email, // "dalitest3@gmail.com",
      password: password, // "*Home@123*"
    },
  });
  expect(response.status()).toBe(200);
  return response.status();
}
