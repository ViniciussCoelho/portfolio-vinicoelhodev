import type { ReactNode } from "react";
import { isDev, isExternal } from "@/lib/site";
import { Doodle } from "./sketch";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[110rem] px-5 sm:px-10 lg:px-16 ${className}`}>{children}</div>;
}

/** A page section, opened by a hand-drawn line across the whole width. */
export function Section({ id, children, className = "" }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`relative mt-24 sm:mt-36 ${className}`}>
      <Doodle name="divider" stretch strokeWidth={3} className="mb-12 h-4 w-full opacity-70 sm:mb-16" />
      {children}
    </section>
  );
}

const titleDoodles = {
  underline: { name: "underline", className: "-bottom-4 left-0 h-5 w-full" },
  double: { name: "underlineDouble", className: "-bottom-6 -left-2 h-7 w-[calc(100%+1rem)]" },
  circle: { name: "circle", className: "-top-6 -left-10 h-[calc(100%+3rem)] w-[calc(100%+5rem)]" },
  none: null,
} as const;

/**
 * Section heading: a handwritten index number over a big serif title with a
 * doodle drawn around it. Position/rotation is left to each section.
 */
export function SectionTitle({
  id,
  number,
  children,
  doodle = "underline",
  className = "",
  titleClassName = "font-serif text-5xl font-bold sm:text-6xl lg:text-7xl",
}: {
  id: string;
  number: string;
  children: ReactNode;
  doodle?: keyof typeof titleDoodles;
  className?: string;
  titleClassName?: string;
}) {
  const d = titleDoodles[doodle];
  return (
    <div className={className}>
      <p aria-hidden="true" className="hand mb-1 text-3xl text-muted">
        {number}
      </p>
      <h2 id={`${id}-title`} className={`relative inline-block leading-none ${titleClassName}`}>
        {children}
        {d && <Doodle name={d.name} stretch className={`absolute ${d.className}`} />}
      </h2>
    </div>
  );
}

/**
 * Bold ink link. External links open in a new tab and get a small ↗ marker;
 * `newTabLabel` is announced to screen readers ("opens in a new tab").
 */
export function TextLink({
  href,
  children,
  className = "",
  newTabLabel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  newTabLabel?: string;
}) {
  const external = isExternal(href);
  return (
    <a
      href={href}
      className={`ink-link ${className}`}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
      {external && (
        <>
          <span aria-hidden="true" className="ml-0.5 font-normal">
            ↗
          </span>
          {newTabLabel && <span className="sr-only"> ({newTabLabel})</span>}
        </>
      )}
    </a>
  );
}

/** A margin note in handwriting. Decorative: hidden from assistive tech. */
export function Note({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p aria-hidden="true" className={`hand text-2xl text-muted sm:text-[1.7rem] ${className}`}>
      {children}
    </p>
  );
}

/** Development-only reminder for values that still need to be filled in. */
export function ConfigHint({ children }: { children: ReactNode }) {
  if (!isDev) return null;
  return (
    <span className="inline-block rounded-[2px] border border-dashed border-muted px-2 py-0.5 font-sans text-sm font-normal text-muted">
      {children}
    </span>
  );
}
