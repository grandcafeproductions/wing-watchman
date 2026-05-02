import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    if (typeof window !== "undefined") {
      const ok = localStorage.getItem("chatb_auth") === "1";
      throw redirect({ to: ok ? "/dashboard" : "/login" });
    }
  },
  component: () => null,
});
