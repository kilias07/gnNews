import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { allCountries } from "./allCaountries";
import GetCountryFlag from "../../../utils/getCountryFlag";
import useOnClickOutside from "../../../hooks/useClickOutside";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  start: { rotate: "-180deg", transition: { duration: 0.2 } },
  rotate: { rotate: "-180deg", transition: { duration: 0.2 } },
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsOpen(false));
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      <div
        ref={ref}
        className={`overflow-x-hidden absolute h-screen z-40 bg-white ${
          isOpen ? "w-[12rem]" : "w-12"
        }`}
      >
        <div className="mb-4 flex justify-between sticky top-0 z-30 bg-white py-1">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="w-6 absolute h-6"
            variants={variants}
            animate={isOpen ? "stop" : "rotate"}
          >
            <AiOutlineDoubleLeft />
          </motion.button>
          <h3 className={`ml-10 ${isOpen ? "block" : "hidden"}`}>
            {t("sidebar.choiceCountry")}
          </h3>
          <hr />
        </div>
        <ul className="mt-10">
          {allCountries.map(({ code, name }) => {
            return (
              <li key={code} className="my-2 text-sm">
                <NavLink
                  onClick={() => setIsOpen(false)}
                  to={{
                    pathname: `/country/${code}`,
                  }}
                >
                  {({ isActive }) => {
                    return (
                      <div
                        className={`flex gap-4 hover:opacity-100  ${
                          isActive ? "opacity-100" : "opacity-40"
                        }`}
                      >
                        <div className={`${isOpen ? "scale-90" : "scale-100"}`}>
                          <GetCountryFlag code={code} />
                        </div>
                        <span
                          className={`flex-1 ${
                            isActive
                              ? "underline underline-offset-4 font-medium"
                              : "text-gray-500 hover:text-black"
                          }  ${isOpen ? "block" : "hidden"}`}
                        >
                          {name}
                        </span>
                      </div>
                    );
                  }}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </AnimatePresence>
  );
}
