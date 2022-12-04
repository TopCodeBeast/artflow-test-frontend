export interface LetterAvatarProps {
  name: string;
  fontSize?: number;
  size?: number;
  backgroundColor?: string;
}

const LetterAvatar = ({
  name,
  fontSize = 32,
  size = 40,
  backgroundColor = "purple",
}: LetterAvatarProps) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        fontSize,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      {name[0] || "A"}
    </div>
  );
};

export default LetterAvatar;
