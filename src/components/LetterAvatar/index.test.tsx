import LetterAvatar, { LetterAvatarProps } from ".";
import { render } from "@testing-library/react";

const makeSut = (props: LetterAvatarProps) => {
  return render(<LetterAvatar {...props} />);
};

describe("<LetterAvatar />", () => {
  test("Should render name correctly.", () => {
    const { getByText } = makeSut({ name: "Arnold" });
    expect(getByText(/A/)).toBeInTheDocument();
  });
});
