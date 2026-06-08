import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "claude101:progress";

function readStorage(): Set<string> {
  if (typeof localStorage === "undefined") return new Set();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? new Set(parsed as string[]) : new Set();
  } catch {
    return new Set();
  }
}

function writeStorage(set: Set<string>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
  } catch {
    // ignore (private mode / quota)
  }
}

/**
 * Tracks which chapter slugs the reader has completed, persisted in localStorage
 * so progress survives reloads. Syncs across tabs via the `storage` event.
 */
export function useProgress() {
  const [completed, setCompleted] = useState<Set<string>>(readStorage);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setCompleted(readStorage());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const isComplete = useCallback(
    (slug: string) => completed.has(slug),
    [completed]
  );

  const markComplete = useCallback((slug: string) => {
    setCompleted((prev) => {
      if (prev.has(slug)) return prev;
      const next = new Set(prev);
      next.add(slug);
      writeStorage(next);
      return next;
    });
  }, []);

  const toggleComplete = useCallback((slug: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      writeStorage(next);
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setCompleted(() => {
      const empty = new Set<string>();
      writeStorage(empty);
      return empty;
    });
  }, []);

  return { completed, isComplete, markComplete, toggleComplete, reset };
}
