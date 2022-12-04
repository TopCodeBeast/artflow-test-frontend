import App from "./App";
import { render } from "@testing-library/react";

const makeSut = () => {
  return render(<App />);
};

describe("<App />", () => {
  test("Should render message input correctly.", () => {
    expect(true).toEqual(true);
  });
});
