import LetterAvatar from "./components/LetterAvatar";
import MessageInput from "./components/MessageInput";

import "./App.css";
import ChatBox from "./components/ChatBox";

const App = () => {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        <LetterAvatar name="Artflow" />
        <ChatBox text={"Hello, I am new here."} />
      </div>
      <div>
        <MessageInput onEnter={() => {}} />
      </div>
    </div>
  );
};

export default App;
