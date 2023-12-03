import { createContext, useState } from "react";

export const RegisterContextt = createContext("");

const RegisterContextProvider = ({ children }) => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    return (
        <RegisterContextt.Provider
            value={{
                value1,
                setValue1,
                value2,
                setValue2
            }}
        >
            {children}
        </RegisterContextt.Provider>
    );
};
export default RegisterContextProvider;