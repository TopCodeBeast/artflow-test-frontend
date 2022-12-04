import { useEffect, useRef } from "react";

// import components
import ChatBox from "../ChatBox";

// import types
import Chat from "../../types/chat";

export interface ChatsProps {
  chats: Array<Chat>;
}

const Chats = ({ chats }: ChatsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef && containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [chats]);

  return (
    <div className="chats-container" ref={containerRef}>
      {chats.map((chat, index) => (
        <div data-testid={`chat-box-${index}`} key={index}>
          <ChatBox chat={chat} />
        </div>
      ))}
    </div>
  );
};

export default Chats;
