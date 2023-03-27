import {useState} from "react";
import {NavLink} from "react-router-dom";
import {allCountries} from "./allCaountries";
import GetAllCountriesFlag from "../../../utils/getAllCountriesFalg";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className={`overflow-x-hidden ${isOpen ? 'w-[12rem]' : 'w-8'}`}>
            <div className="mb-4 flex justify-between">
                <h3 className={`${isOpen ? 'text-xl font-normal' : 'hidden'}`}>Choice country</h3>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? '<-' : '->'}
                </button>
                <hr/>
            </div>
            <ul>
                {allCountries.map(({code, name}) => {
                    return (
                        <li key={code} className="my-2 text-sm">
                            <NavLink to={{
                                pathname: `/country/${code}`,
                            }}
                            >
                                {({isActive}) => (
                                    <div
                                        className={`flex gap-4 hover:opacity-100  ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                                        <div className={`${isOpen ? 'scale-90' : 'scale-100'}`}>
                                            <GetAllCountriesFlag code={code}/>
                                        </div>
                                        <span
                                            className={`flex-1 ${isActive ? "underline underline-offset-4 font-medium" : "text-gray-500 hover:text-black"}  ${isOpen ? 'block' : 'hidden'}`}
                                        >
                                        {name}
                                    </span>
                                    </div>
                                )}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

