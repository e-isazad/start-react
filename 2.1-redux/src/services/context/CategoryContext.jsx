import { createContext, useState } from "react";

export const CategoryContextt = createContext("");

const CategoryContextProvider = ({ children }) => {
    const [bira, setBira] = useState([]);
    const [detailsVisible, setDetailsVisible] = useState(false);
    const [selectedBira, setSelectedBira] = useState(null);
    return (
        <CategoryContextt.Provider
            value={{
                bira,
                setBira,
                detailsVisible,
                setDetailsVisible,
                selectedBira,
                setSelectedBira
            }}
        >
            {children}
        </CategoryContextt.Provider>
    );
};
export default CategoryContextProvider;