import { test as base } from "@playwright/test";

type TestData = {
  valueToChange: string;
  filepath: string;
  valueUpdateOf: string;
};
type MyFixtures = {
  TestData: TestData;
  logger: (val: string) => void;
};

export const test = base.extend<MyFixtures>({
  TestData: async ({}, use) => {
    const data = {
      valueToChange: "150720",
      filepath: "C:\\Users\\asuso\\Downloads\\download.xlsx",
      valueUpdateOf: "Mango",
    };

    await use(data);
  },
  logger: async ({}, use) => {
    function logger(val: string) {
      console.log(val);
    }
    await use(logger);
  },
});
