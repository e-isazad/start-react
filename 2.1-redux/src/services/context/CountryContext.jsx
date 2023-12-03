import { createContext, useState } from "react";

export const CountryContextt = createContext("");

const CountryContextProvider = ({ children }) => {
  let [country, setCountry] = useState(0)
  return (
    <CountryContextt.Provider
      value={{
        country, setCountry
      }}
    >
      {children}
    </CountryContextt.Provider>
  );
};
export default CountryContextProvider;