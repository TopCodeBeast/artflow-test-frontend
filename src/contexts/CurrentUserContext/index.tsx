import { createContext, useContext } from "react";

// import types
import User from "../../types/user";

const defaultCurrentUser: User = {
  id: "customer",
  name: "Customer",
  color: "orange",
};

const currentUserContext = createContext<User>(defaultCurrentUser);

interface ContextProps {
  children: JSX.Element[] | JSX.Element;
}

const CurrentUserContextProvider = ({ children }: ContextProps) => {
  return (
    <currentUserContext.Provider value={defaultCurrentUser}>
      {children}
    </currentUserContext.Provider>
  );
};

const useCurrentUser = () => {
  return useContext(currentUserContext);
};

export { CurrentUserContextProvider, useCurrentUser };
