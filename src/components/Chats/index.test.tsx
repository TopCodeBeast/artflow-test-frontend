import Chats, { ChatsProps } from ".";
import { render } from "@testing-library/react";

// import types
import Chat from "../../types/chat";

const makeSut = (props: ChatsProps) => {
  return render(<Chats {...props} />);
};

const chats: Array<Chat> = [
  {
    user: {
      name: "Customer",
      id: "customer",
      color: "orange",
    },
    message: {
      loading: false,
      text: "Hello There",
    },
  },
  {
    user: {
      name: "Artflow",
      id: "artflow",
      color: "purple",
    },
    message: {
      loading: false,
      text: "Hello There",
    },
  },
];

describe("<Chats />", () => {
  test("Should render all of chats box", () => {
    const { getAllByTestId } = makeSut({ chats });
    expect(
      getAllByTestId("chat-box-", {
        exact: false,
      }).length
    ).toBe(chats.length);
  });
});
