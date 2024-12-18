import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
// import { formatPrice } from "../utils";

// firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        selectedProducts: [...state.selectedProducts, payload],
      };
    case "LOGIN":
      return { ...state, user: payload };
    case "AUTH_READY":
      return { ...state, authReady: true };
    case "CHANGE_COLOR":
      return { ...state, color: payload };
    default: {
      return state;
    }
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    color: "",
    selectedProducts: [],
    authReady: false,
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOGIN", payload: user });
      dispatch({ type: "AUTH_READY" });
    });
  }, []);

  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  const [password, setPassword] = useState("");

  return (
    <GlobalContext.Provider
      value={{ ...state, changeColor, dispatch, password, setPassword }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
