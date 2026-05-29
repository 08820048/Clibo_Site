import { useEffect } from "react";

export function useNavScroll() {
  useEffect(() => {
    const nav = document.querySelector("[data-nav]");
    if (!nav) return;

    function sync() {
      nav.classList.toggle("is-scrolled", window.scrollY > 10);
    }

    window.addEventListener("scroll", sync, { passive: true });
    sync();
    return () => window.removeEventListener("scroll", sync);
  }, []);
}
