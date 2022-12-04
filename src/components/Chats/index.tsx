// import components
import ChatBox from "../ChatBox";

// import types
import Chat from "../../types/chat";

export interface ChatsProps {
  chats: Array<Chat>;
}

const Chats = ({ chats }: ChatsProps) => {
  return (
    <div className="chats-container">
      {chats.map((chat, index) => (
        <ChatBox chat={chat} key={index} />
      ))}
    </div>
  );
};

export default Chats;
