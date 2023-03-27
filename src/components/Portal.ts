import { ReactNode, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  parent?: HTMLElement;
  className?: string;
}
export default function Portal({ children, parent, className }: PortalProps) {
  const el = useMemo(() => document.createElement("div"), []);
  useEffect(() => {
    const target = parent && parent.appendChild! ? parent : document.body;
    const classList = ["portal-container"];

    if (className) className.split(" ").forEach((item) => classList.push(item));

    classList.forEach((item) => el.classList.add(item));
    target.appendChild(el);

    return () => {
      target.removeChild(el);
    };
  }, [el, parent, className]);

  return createPortal(children, el);
}
