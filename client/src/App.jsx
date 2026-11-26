import { Suspense } from "react";
import PublicSite from "@/PublicSite";

export default function App() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center text-sm text-muted-foreground">
          Loading…
        </div>
      }
    >
      <PublicSite />
    </Suspense>
  );
}
