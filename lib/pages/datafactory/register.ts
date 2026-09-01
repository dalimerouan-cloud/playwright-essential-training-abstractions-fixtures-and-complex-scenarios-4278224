import { request, expect } from "@playwright/test";

export async function registerUser(email: string, password: string) {
  const createRequestContext = await request.newContext();
  const response = await createRequestContext.post(
    "https://practicesoftwaretesting.com/auth/register",
    {
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
    },
  );
  expect(response.status()).toBe(200);
  return response.status();
}
