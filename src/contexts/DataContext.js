import { useContext, useReducer } from "react";
import { createContext } from "react";

const initial_state = {
  name: "Jugesh",
};
const reducer = (state, action) => {
  switch (action?.type) {
    default:
      return { ...state };
  }
};
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial_state);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
