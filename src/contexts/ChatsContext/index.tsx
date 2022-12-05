import { createContext, useContext, useState } from "react";

// import types
import Chat from "../../types/chat";

export interface ChatsContextState {
  chats: Array<Chat>;
  addChats: (inputChats: Array<Chat>) => void;
}

const defaultState: ChatsContextState = {
  chats: [],
  addChats: (inputChats: Array<Chat>) => {},
};

const chatsContext = createContext<ChatsContextState>(defaultState);

interface ContextProps {
  children: JSX.Element[] | JSX.Element;
}

const ChatsContextProvider = ({ children }: ContextProps) => {
  const [chats, setChats] = useState<Array<Chat>>([
    {
      user: {
        id: "customer",
        name: "Customer",
        color: "orange",
      },
      message: {
        loading: false,
        text: "Hi there, I am Aida, an AI bot created by Artflow.",
      },
    },
  ]);

  const addChats = (inputChats: Array<Chat>) => {
    const storedChats: Array<Chat> = JSON.parse(
      window.localStorage.getItem("chats") || "[]"
    );
    let tempChats: Array<Chat>;
    if (chats.length > storedChats.length) {
      tempChats = [...chats];
    } else {
      tempChats = [...storedChats];
    }
    tempChats = tempChats.concat(inputChats);
    setChats(tempChats);
    window.localStorage.setItem("chats", JSON.stringify(tempChats));
  };

  return (
    <chatsContext.Provider value={{ chats, addChats }}>
      {children}
    </chatsContext.Provider>
  );
};

const useChats = () => {
  return useContext(chatsContext);
};

export { ChatsContextProvider, useChats };
