"use client"

import api from "@/api";
import { useAuth } from "@/contexts/auth.context";
import { useQuery } from "@tanstack/react-query";
import * as jwt from "jsonwebtoken";
import { useEffect } from "react";

export function Authenticated({ children }: { children: React.ReactNode }) {
  const { isAuthInitialized, setIsAuthInitialized, setIsLoggedIn, setUserId } = useAuth();

  const { data: accessToken, isFetched } = useQuery({
    queryFn: api.auth.refreshToken,
    queryKey: ["authentication"],
    refetchInterval: 1000 * 60 * 19,
    staleTime: 1000 * 60 * 19.5,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchIntervalInBackground: true,
  });

  useEffect(() => {
    if (isFetched) {
      setIsAuthInitialized(true);
    }
  }, [isFetched, setIsAuthInitialized]);

  useEffect(() => {
    if (accessToken) {
      setUserId(jwt.decode(accessToken)?.sub as string);
      setIsLoggedIn(true);
    } else {
      setUserId("");
      setIsLoggedIn(false);
    }
  }, [accessToken, setIsLoggedIn, setUserId]);

  if (!isAuthInitialized) return null;

  return children;
}
