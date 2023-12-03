import { createContext, useState } from "react";

export const RegeContext = createContext("");

const RegeContextProvider = ({ children }) => {
    const [rege, setRege] = useState(false);

    return (
        <RegeContext.Provider
            value={{
                rege,
                setRege
            }}
        >
            {children}
        </RegeContext.Provider>
    );
};
export default RegeContextProvider;