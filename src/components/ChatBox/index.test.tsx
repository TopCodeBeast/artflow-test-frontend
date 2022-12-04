import ChatBox, { ChatBoxProps } from ".";
import { render } from "@testing-library/react";

const makeSut = (props: ChatBoxProps) => {
  return render(<ChatBox {...props} />);
};

describe("<ChatBox />", () => {
  test("Should render text correctly.", () => {
    const { getByText } = makeSut({ text: "Hello There" });
    expect(getByText(/Hello There/)).toBeInTheDocument();
  });
});
