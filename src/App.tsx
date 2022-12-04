import "./App.css";

// import components
import Chats from "./components/Chats";
import MessageInput from "./components/MessageInput";

// import types
import Chat from "./types/chat";

const chats: Array<Chat> = [];

const App = () => {
  return (
    <div className="App">
      <Chats chats={chats} />
      <MessageInput onEnter={() => {}} />
    </div>
  );
};

export default App;
