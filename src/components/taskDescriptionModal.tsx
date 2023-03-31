import {useAppDispatch} from "../app/hooks";
import {createPortal} from "react-dom";
import {toggle} from "../features/taskDescription/taskDescriptionSlice";
import useOnClickOutside from "../hooks/useClickOutside";
import useEscape from "../hooks/useEscape";
import {useRef} from "react";

function TaskDescriptionModal() {
    const ref = useRef(null);
    const dispatch = useAppDispatch();
    const handleOpen = () => {
        dispatch(toggle());
    };

    useEscape(handleOpen)
    useOnClickOutside(ref, handleOpen)

    return createPortal(
        <div className="backdrop-blur-2xl fixed inset-0  z-40 flex justify-center items-center">
            <div ref={ref} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[60rem] h-[60rem] bg-gray-100 rounded-lg  shadow-md p-16 flex flex-col">
                <h1 className="text-4xl">
                    Cześć, cieszę się że mogłem uczestniczyć w etapie rekrutacji, zadanie jedno z lepszych jakie
                    rozwiązywałem stricte połączone z frontendem, fajnie się czytało luźno tekst zadania :)
                </h1>
                <h3 className="text-2xl my-10">
                    Co dało mi frajdę lub było frustrujące:
                </h3>
                <ul className="list-disc text-base">
                    <li >
                        największa frajda to Redux Tool Kit i pobieranie Api za jego pomocą, w network można zobaczyć,
                        że jeśli już coś odebraliśmy to drugi raz nie musimy tego robić
                    </li>
                    <li>
                        największy wrzód na .... to footer z zegarem i stanem z RTK z pozoru trywialny ale ukryty
                        smaczek w postaci renderowania co sekundę dał mi popalić, próbowałem memoaizacji z useMemo ale
                        niestety z RTK to nie działało poprawnie. Finalanie zdecydowałem się wynieść zegar do osobnego
                        komponentu
                    </li>
                </ul>
                <p className="my-10">
                    Czekam na feedback!
                </p>
                <p className="italic">
                    PS mam wrażenie że POPUP to wykazanie się znajomością react portal ? :)
                </p>
            </div>
        </div>, document.getElementById("portal") as HTMLElement
    )
}

export default TaskDescriptionModal;