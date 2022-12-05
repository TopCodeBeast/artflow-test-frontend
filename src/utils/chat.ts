import axios from "axios";

// import types
import Chat from "../types/chat";
import User from "../types/user";

// import constants
import { apiURL, BotUser } from "../constants";

const chatWithBot: (
  text: string,
  currentUser: User
) => Promise<{
  chats: Array<Chat>;
  promise: Promise<Array<Chat>> | undefined;
}> = (text, currentUser) => {
  return new Promise((resolve, reject) => {
    axios
      .post(apiURL + "chat", {
        text,
      })
      .then(({ data }) => {
        if (data.index < 0) {
          resolve({
            chats: [
              {
                user: currentUser,
                message: {
                  loading: false,
                  text,
                },
              },
              {
                user: BotUser,
                message: {
                  loading: false,
                  text: data.answer,
                },
              },
            ],
            promise: undefined,
          });
        } else {
          const promise = new Promise<Array<Chat>>((resolve, reject) => {
            axios
              .post(apiURL + "result", { index: data.index })
              .then((result) => {
                const resultData = result.data;
                const resultChat: Chat = {
                  user: BotUser,
                  message: {
                    loading: false,
                    text: resultData["story"],
                    hasImage: resultData.type === "portrait",
                    imageURL: resultData["portrait"],
                  },
                };
                resolve([
                  {
                    user: BotUser,
                    message: {
                      loading: false,
                      text: resultData.text,
                    },
                  },
                  resultChat,
                ]);
              })
              .catch(reject);
          });
          resolve({
            chats: [
              {
                user: currentUser,
                message: {
                  loading: false,
                  text,
                },
              },
              {
                user: BotUser,
                message: {
                  loading: false,
                  text: data.answer,
                },
              },
              {
                user: BotUser,
                message: {
                  loading: true,
                  text: "Loaded",
                },
              },
            ],
            promise,
          });
        }
      })
      .catch(reject);
  });
};

export { chatWithBot };
