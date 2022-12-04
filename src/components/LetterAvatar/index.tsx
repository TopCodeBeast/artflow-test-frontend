// import types
import User from "../../types/user";

export interface LetterAvatarProps {
  user: User;
}

const LetterAvatar = ({ user }: LetterAvatarProps) => {
  return (
    <div
      style={{
        minWidth: "40px",
        minHeight: "40px",
        width: "40px",
        height: "40px",
        borderRadius: 20,
        backgroundColor: user.color,
        fontSize: 32,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      {user.name[0] || "A"}
    </div>
  );
};

export default LetterAvatar;
