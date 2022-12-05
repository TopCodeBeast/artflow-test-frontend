// import types
import Chat from "../../types/chat";

// import components
import LetterAvatar from "../LetterAvatar";

// import context
import { useCurrentUser } from "../../contexts/CurrentUserContext";

// import types
import User from "../../types/user";

// import constants
import { apiURL } from "../../constants";

export interface ChatBoxProps {
  chat: Chat;
}

const ChatBox = ({ chat }: ChatBoxProps) => {
  const currentUser: User = useCurrentUser();
  const isMe: boolean = currentUser.id === chat.user.id;

  return (
    <div
      style={{
        display: "flex",
        width: "90%",
        marginLeft: isMe ? "10%" : 0,
        flexDirection: isMe ? "row-reverse" : "row",
        marginTop: 24,
      }}
      data-role="chatbox"
    >
      <LetterAvatar user={chat.user} />
      {chat.message.loading ? (
        <img
          style={{
            marginLeft: 8,
          }}
          alt="loading"
          src={window.origin + "/loading.gif"}
          width={50}
          height={50}
        />
      ) : chat.message.hasImage ? (
        chat.message.imageURL && (
          <img
            style={{
              marginLeft: 8,
            }}
            alt="portrait"
            src={apiURL + chat.message.imageURL}
            width={100}
            height={100}
          />
        )
      ) : (
        <div
          style={{
            marginLeft: 8,
            marginRight: 8,
            border: "1px solid black",
            borderRadius: 8,
            padding: 12,
          }}
        >
          {chat.message.text}
        </div>
      )}
    </div>
  );
};

export default ChatBox;
