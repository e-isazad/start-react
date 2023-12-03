import { createContext, useState } from "react";

export const LoginContextt = createContext("");

const LoginContextProvider = ({ children }) => {
    const [showCard, setShowCard] = useState(false);
    const [showLogin, setShowLogin] = useState(true);
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
  return (
    <LoginContextt.Provider
      value={{
        showCard,
        setShowCard,
        showLogin,
        setShowLogin,
        value1,
        setValue1,
        value2,
        setValue2
      }}
    >
      {children}
    </LoginContextt.Provider>
  );
};
export default LoginContextProvider;