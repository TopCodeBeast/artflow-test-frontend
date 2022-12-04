export interface ChatBoxProps {
  text: string;
}

const ChatBox = ({ text }: ChatBoxProps) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: 12,
        borderRadius: 8,
      }}
    >
      {text}
    </div>
  );
};

export default ChatBox;
