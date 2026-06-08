import { useState } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";

import { AppSidebar } from "@/components/AppSidebar";
import { HomePage } from "@/pages/HomePage";
import { ChapterPage } from "@/pages/ChapterPage";
import { useProgress } from "@/hooks/useProgress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Shell() {
  const { isComplete, markComplete, reset } = useProgress();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile top bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b bg-background/95 px-4 py-3 backdrop-blur lg:hidden">
        <a href="#/" className="flex items-center gap-2 font-bold">
          <GraduationCap className="size-5 text-primary" />
          Claude 101
        </a>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menú"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </header>

      <div className="lg:flex">
        {/* Sidebar (desktop) */}
        <aside className="sticky top-0 hidden h-screen w-72 shrink-0 border-r lg:block">
          <AppSidebar isComplete={isComplete} />
        </aside>

        {/* Sidebar (mobile drawer) */}
        {mobileOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileOpen(false)}
            />
            <div
              className={cn(
                "absolute left-0 top-0 h-full w-72 max-w-[85%] border-r bg-background shadow-xl"
              )}
            >
              <AppSidebar
                isComplete={isComplete}
                onNavigate={() => setMobileOpen(false)}
              />
            </div>
          </div>
        )}

        {/* Main content */}
        <main className="min-w-0 flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage isComplete={isComplete} reset={reset} />}
            />
            <Route
              path="/capitulo/:slug"
              element={
                <ChapterPage
                  isComplete={isComplete}
                  markComplete={markComplete}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Shell />
    </HashRouter>
  );
}
