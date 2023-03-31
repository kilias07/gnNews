import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {setLayouter} from "../../../features/layouter/layouterSlice";
import {BsListUl, BsGrid3X3GapFill} from "react-icons/bs";
import {useTranslation} from "react-i18next";
import LangBtn from "./langBtn";
import {toggle} from "../../../features/taskDescription/taskDescriptionSlice";
import TaskDescriptionModal from "../../taskDescriptionModal";

export default function Header() {
    const layoutType = useAppSelector((state) => state.layouter.value);
    const showTaskDesc = useAppSelector(state => state.taskDescription.value)
    const {t} = useTranslation();

    const dispatch = useAppDispatch();
    const handleLayouter = () => {
        dispatch(setLayouter());
    };
    const handleOpenDescription = () => dispatch(toggle());

    const togglerStyle = `flex justify-around transition duration-200 w-20 py-2 [&>*]:text-lg text-gray-400 ${
        layoutType === "grid"
            ? "[&>:first-child]:text-red-700 [&>:first-child]:scale-125"
            : "[&>:last-child]:text-red-700 [&>:last-child]:scale-125"
    }`;

    return (
        <>
        <nav className="mx-auto container mb-10 h-22">
            <div className="flex items-center">
                <div className="logo">
                    <Link to={"/"}>
                        <div>
                            <span>gn</span>
                            <span>News</span>
                        </div>
                        <h1 className="text-gray-900">News</h1>
                    </Link>
                </div>
                <ul className="mr-6 grow flex flex-col-reverse items-end sm:flex-row justify-end sm:items-center gap-2 sm:gap-20 h-full">
                    <li className="flex gap-2">
                        <button className={togglerStyle} onClick={handleLayouter}>
                            <BsGrid3X3GapFill/>
                            <BsListUl/>
                        </button>
                        <LangBtn/>
                    </li>
                    <li className="sm:w-44">
                        <button className="relative text-sm lg:text-lg text-gray-800" onClick={handleOpenDescription}>
                            <span
                                className="border-2 border-red-600 h-10 px-3 py-1.5 hover:bg-gray-100 transition duration-200 rounded-md">{t("header.taskDescription")}</span>
                        </button>
                    </li>
                </ul>
            </div>
            <hr className="z-20"/>
        </nav>
            {showTaskDesc && <TaskDescriptionModal />}
        </>
    );
}
