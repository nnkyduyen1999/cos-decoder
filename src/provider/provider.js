import React, { useState } from "react";

const Context = React.createContext();

const Provider = ({children}) => {
  const [info, setInfo] = useState(null);

  return (
    <Context.Provider value={{ info, setInfo }}>
      {children}
    </Context.Provider>
  );
};

export { Provider, Context };
