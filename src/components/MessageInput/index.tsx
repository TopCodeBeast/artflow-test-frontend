import React, { useState, useRef } from "react";

export interface MessageInputProps {
  onEnter: (text: string) => void;
}

const MessageInput = ({ onEnter }: MessageInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>("");

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      onEnter(value);
      setValue("");
    }
  };

  const onClick = () => {
    onEnter(value);
    setValue("");
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 8,
      }}
    >
      <input
        ref={inputRef}
        data-testid="message-input"
        style={{
          flexGrow: 1,
          fontSize: 20,
          padding: 8,
        }}
        onKeyPress={onKeyPress}
        placeholder="Input message."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div
        data-testid="message-send-button"
        style={{
          fontSize: 36,
          color: "rgb(56 106 249)",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        ▶
      </div>
    </div>
  );
};

export default MessageInput;
