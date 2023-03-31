import {useEffect} from "react";

export default function useEscape(handleClose: () => void) {
    useEffect(() => {
        const closeOnEscapeKey = (e: KeyboardEvent) =>
            e.key === "Escape" ? handleClose() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, [handleClose]);
}