import User from "./user";

export default interface Chat {
  user: User;
  message: {
    text: string;
    loading: boolean;
  };
}
