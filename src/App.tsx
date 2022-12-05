import { useEffect } from "react";
import "./App.css";

// import components
import Chats from "./components/Chats";
import MessageInput from "./components/MessageInput";

// import context
import { useChats } from "./contexts/ChatsContext";
import { useCurrentUser } from "./contexts/CurrentUserContext";

// import utils
import { chatWithBot } from "./utils/chat";

const App = () => {
  const { chats, addChats } = useChats();
  const currentUser = useCurrentUser();

  useEffect(() => {
    window.localStorage.setItem("chats", "[]");
  }, []);

  const onEnter = (text: string) => {
    if (text.length === 0) {
      return;
    }
    chatWithBot(text, currentUser).then((res) => {
      addChats(res.chats);
      if (res.promise) {
        res.promise.then((newChats) => {
          addChats(newChats);
        });
      }
    });
  };

  return (
    <div className="App">
      <Chats chats={chats} />
      <MessageInput onEnter={onEnter} />
    </div>
  );
};

export default App;
