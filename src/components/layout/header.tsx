import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setLayouter } from "../../features/layouter/layouterSlice";
import { BsListUl, BsGrid3X3GapFill } from "react-icons/bs";

export default function Header() {
  const layoutType = useAppSelector((state) => state.layouter.value);

  const dispatch = useAppDispatch();
  const handleLayouter = () => {
    dispatch(setLayouter());
  };

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
                <span>Studio</span>
              </div>
              <h1 className="text-gray-900">News</h1>
            </Link>
          </div>
          <ul className="mr-6 grow flex justify-end items-center gap-20 h-full">
            <li>
              <button className={togglerStyle} onClick={handleLayouter}>
                <BsGrid3X3GapFill />
                <BsListUl />
              </button>
            </li>
            <li>
              <button className="relative text-lg text-gray-800">
                <span className="border-2 border-red-600 h-10 px-3 py-1.5 hover:bg-gray-100 transition duration-200 rounded-md">
                  task description
                </span>
              </button>
            </li>
          </ul>
        </div>
        <hr className="z-20" />
      </nav>
    </>
  );
}
