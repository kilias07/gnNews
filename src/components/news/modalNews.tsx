import { useEffect, useRef, useState } from "react";
import Portal from "../Portal";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  locked?: boolean;
  children: React.ReactNode;
}
export default function Modal({ open, onClose, locked, children }: ModalProps) {
  const [active, setActive] = useState(false);
  const backdrop = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = backdrop;

    const transitionEnd = () => setActive(open);

    const keyHandler = (e: KeyboardEvent) =>
      !locked && [27].indexOf(e.keyCode) >= 0 && onClose();

    const clickHandler = (e: Event) =>
      !locked && e.target === current && onClose();

    if (current) {
      current.addEventListener("transitionend", transitionEnd);
      current.addEventListener("click", clickHandler);
      window.addEventListener("keyup", keyHandler);
    }

    if (open) {
      window.setTimeout(() => {
        setActive(open);
        document.querySelector("#root")!.setAttribute("inert", "true");
      }, 10);
    }

    return () => {
      if (current) {
        current.removeEventListener("transitionend", transitionEnd);
        current.removeEventListener("click", clickHandler);
      }

      document.querySelector("#root")!.removeAttribute("inert");
      window.removeEventListener("keyup", keyHandler);
    };
  }, [open, locked, onClose]);

  return (
    <>
      {(open || active) && (
        <Portal className="modal-portal">
          <div ref={backdrop} className={`${active && open && "active"}`}>
            <div className="modal-content">{children}</div>
          </div>
        </Portal>
      )}
    </>
  );
}
