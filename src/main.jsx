import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { Routs } from "./router/Routs.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className=" mx-auto">
          <RouterProvider router={Routs}></RouterProvider>
        </div>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
