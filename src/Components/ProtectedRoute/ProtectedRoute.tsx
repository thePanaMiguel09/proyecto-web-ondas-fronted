// src/components/ProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/authSore";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated());

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
