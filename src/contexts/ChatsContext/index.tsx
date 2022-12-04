import { createContext, useContext, useState } from "react";

// import types
import Chat from "../../types/chat";

export interface ChatsContextState {
  chats: Array<Chat>;
  addChat: (chat: Chat) => void;
}

const defaultState: ChatsContextState = {
  chats: [],
  addChat: (chat: Chat) => {},
};

const chatsContext = createContext<ChatsContextState>(defaultState);

interface ContextProps {
  children: JSX.Element[] | JSX.Element;
}

const ChatsContextProvider = ({ children }: ContextProps) => {
  const [chats, setChats] = useState<Array<Chat>>([]);

  const addChat = (chat: Chat) => {
    let tempChats: Array<Chat> = [...chats];
    tempChats.push(chat);
    setChats(tempChats);
  };

  return (
    <chatsContext.Provider value={{ chats, addChat }}>
      {children}
    </chatsContext.Provider>
  );
};

const useChats = () => {
  return useContext(chatsContext);
};

export { ChatsContextProvider, useChats };
