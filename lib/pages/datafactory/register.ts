import { request, expect } from "@playwright/test";

export async function registerUser(email: string, password: string) {
  const createRequestContext = await request.newContext();
  const response = await createRequestContext.post(
    "https://api.practicesoftwaretesting.com/users/register",
    {
      data: {
        first_name: "marven2",
        last_name: "dali2",
        dob: "2000-05-15",
        phone: "5555555555",
        email,
        password,
        address: {
          street: "verdun",
          city: "montreal",
          state: "Qc",
          country: "US",
          postal_code: "H4G 1S1",
        },
      },
    },
  );
  const body = await response.json();
  console.log("Register response:", response.status(), body);
  expect(response.status(), `Register failed: ${JSON.stringify(body)}`).toBe(
    201,
  );
  return body;
}
