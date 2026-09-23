"use client";

/**
 * Both icons are rendered and CSS picks the visible one from `data-theme`, so
 * the server markup never mismatches.
 */
export function ThemeToggle({ label }: { label: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      className="group -mr-2 cursor-pointer rounded-sm p-2 text-fg"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="size-7 fill-current transition-transform duration-300 group-hover:rotate-[30deg] motion-reduce:transition-none dark:hidden"
      >
        <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="hidden size-7 fill-current transition-transform duration-300 group-hover:rotate-[30deg] motion-reduce:transition-none dark:block"
      >
        <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM2 13h2a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2Zm18 0h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2ZM11 2v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0Zm0 18v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0ZM5.99 4.58a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41L5.99 4.58Zm12.37 12.37a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41l-1.06-1.06Zm1.06-10.96a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06ZM7.05 18.36a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06Z" />
      </svg>
    </button>
  );
}
