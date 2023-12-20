"use client";
import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { onAuthStateChanged, getAuth, User } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import { Loader2, RefreshCcw } from "lucide-react";
import Image from "next/image";

interface AuthContextType {
  user: User | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const useAuthContext = (): AuthContextType | undefined =>
  useContext(AuthContext);

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user ? user : null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? (
        <div className="w-screen min-h-screen flex justify-center items-center border">
          <div className="w-32 h-32 relative animate-logo">
            <Image
              src="/logo-big.png"
              fill
              className="object-contain"
              alt="My Giphy Logo"
            />
          </div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
