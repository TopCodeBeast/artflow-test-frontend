import "./App.css";

// import components
import Chats from "./components/Chats";
import MessageInput from "./components/MessageInput";

// import context
import { useChats } from "./contexts/ChatsContext";
import { useCurrentUser } from "./contexts/CurrentUserContext";

const App = () => {
  const { chats, addChat } = useChats();
  const currentUser = useCurrentUser();

  const onEnter = (text: string) => {
    if (text.length === 0) {
      return;
    }
    addChat({
      user: currentUser,
      message: {
        loading: false,
        text,
      },
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
