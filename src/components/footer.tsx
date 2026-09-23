import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-inverse-bg px-5 py-3 text-center font-serif text-sm text-inverse-fg">
      <p>
        &copy; {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
