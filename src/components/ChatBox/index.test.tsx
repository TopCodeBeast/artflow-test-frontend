import ChatBox, { ChatBoxProps } from ".";
import { render } from "@testing-library/react";

const makeSut = (props: ChatBoxProps) => {
  return render(<ChatBox {...props} />);
};

const sampleProps: ChatBoxProps = {
  chat: {
    user: {
      name: "Arnold",
      id: "arnold",
      color: "orange",
    },
    message: {
      text: "Hello There",
      loading: false,
    },
  },
};

const messageLoadingProps: ChatBoxProps = {
  chat: {
    user: {
      name: "Arnold",
      id: "arnold",
      color: "orange",
    },
    message: {
      text: "",
      loading: true,
    },
  },
};

describe("<ChatBox />", () => {
  test("Should render user correctly.", () => {
    const { getByText } = makeSut(sampleProps);
    expect(getByText(/A/)).toBeInTheDocument();
    expect(getByText(/A/)).toHaveStyle(`background-color: orange`);
    expect(getByText(/A/)).toHaveStyle(`color: white`);
  });

  test("Should render message correctly.", () => {
    const { getByText } = makeSut(sampleProps);
    expect(getByText(/Hello There/)).toBeInTheDocument();
  });

  test("Should render message loading correctly.", () => {
    const { getByAltText } = makeSut(messageLoadingProps);
    expect(getByAltText("loading")).toBeInTheDocument();
    expect(getByAltText("loading")).toHaveProperty(
      "src",
      window.origin + "/loading.gif"
    );
  });
});
