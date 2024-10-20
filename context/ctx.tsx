import { useStorageState } from "@/hooks/useStorageState";
import { useContext, createContext, type PropsWithChildren } from "react";

interface UserSession {
  user: {
    id: string;
    username: string;
    email: string;
    profile: any;
  };
  accessToken: string;
}

interface AuthContextType {
  signIn: (userSession: UserSession) => void;
  signOut: () => void;
  session: UserSession | null;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }
  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] =
    useStorageState<UserSession>("userSession");

  const value: AuthContextType = {
    signIn: (userSession: UserSession) => setSession(userSession),
    signOut: () => setSession(null),
    session,
    isLoading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
