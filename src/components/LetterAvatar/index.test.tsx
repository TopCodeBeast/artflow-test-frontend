import LetterAvatar, { LetterAvatarProps } from ".";
import { render } from "@testing-library/react";

const makeSut = (props: LetterAvatarProps) => {
  return render(<LetterAvatar {...props} />);
};

describe("<LetterAvatar />", () => {
  test("Should render name and color correctly.", () => {
    const { getByText } = makeSut({
      user: {
        name: "Arnold",
        color: "red",
        id: "arnold",
      },
    });
    expect(getByText(/A/)).toBeInTheDocument();
  });
});
