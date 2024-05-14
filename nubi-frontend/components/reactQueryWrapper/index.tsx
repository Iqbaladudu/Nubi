"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();

interface ReactQueryWrapperProps {
  children: ReactNode | ReactNode[];
}

export default function ReactQueryWrapper({
  children,
}: ReactQueryWrapperProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
