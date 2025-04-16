import { useState, useEffect, useRef } from "react";

export function useScrollSpy(
  sectionIds: string[],
  options?: {
    offset?: number;
    root?: Element | null;
  }
) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const { offset = 0, root = null } = options || {};

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target.id);

        if (visibleSections.length > 0) {
          setActiveId(visibleSections[0]);
        }
      },
      {
        rootMargin: `-${offset}px 0px 0px 0px`,
        threshold: 0.2,
        root,
      }
    );

    elements.forEach((el) => observer.current?.observe(el));

    return () => observer.current?.disconnect();
  }, [sectionIds, offset, root]);

  return activeId;
}
