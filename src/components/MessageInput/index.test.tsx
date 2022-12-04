import MessageInput, { MessageInputProps } from ".";
import { render, fireEvent } from "@testing-library/react";

const makeSut = (props: MessageInputProps) => {
  return render(<MessageInput {...props} />);
};

describe("<MessageInput />", () => {
  test("Should render input box correctly and call onEnter successfully.", () => {
    const spy = jest.fn();
    const { getByTestId } = makeSut({ onEnter: spy });
    expect(getByTestId("message-input")).toBeInTheDocument();

    fireEvent.keyPress(getByTestId("message-input"), {
      key: "Enter",
      keyCode: 13,
    });
    expect(spy).toHaveBeenCalled();
  });
  test("Should render send button correctly and call onEnter successfully..", () => {
    const spy = jest.fn();
    const { getByTestId } = makeSut({ onEnter: spy });
    expect(getByTestId("message-send-button")).toBeInTheDocument();

    fireEvent.click(getByTestId("message-send-button"));
    expect(spy).toHaveBeenCalled();
  });
});
