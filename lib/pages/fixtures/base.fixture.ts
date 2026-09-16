import { mergeExpects, mergeTests } from "@playwright/test";
//those two are made by playwright's allowed us to merge our difference exports

import { test as pageTest, expect as pageExpext } from "./pages.fixture";
import { test as consoleTest, expect as consoleExpect } from "./consol.fixture";

export const test = mergeTests(pageTest, consoleTest);
export const expect = mergeExpects(pageExpext, consoleExpect);
