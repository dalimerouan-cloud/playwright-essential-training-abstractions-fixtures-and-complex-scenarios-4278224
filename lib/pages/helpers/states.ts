import { randomValueFromArray } from "./array";

export function randomState() {
  const states = ["Alabama", "Alaska", "Arizona"];
  return randomValueFromArray(states);
}
