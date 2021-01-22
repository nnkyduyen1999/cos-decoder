import React, { useState } from "react";

const Context = React.createContext();



const Provider = (props) => {
  const [info, setInfo] = useState(null);

  return (
    <Context.Provider value={{ info, setInfo }}>
      {props.children}
    </Context.Provider>
  );
};

export { Provider, Context };
