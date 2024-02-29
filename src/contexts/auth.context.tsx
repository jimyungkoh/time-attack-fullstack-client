import { TAuthContext } from "@/types/auth-context.type";
import {
  createContext,
  useContext
} from "react";

export const AuthContext = createContext<TAuthContext>({
  userId: "",
  setUserId: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  isAuthInitialized: false,
  setIsAuthInitialized: () => {},
});

export const useAuth = () => useContext(AuthContext);