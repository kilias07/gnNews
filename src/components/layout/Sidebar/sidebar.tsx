import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {allCountries} from "./allCaountries";
import GetAllCountriesFlag from "../../../utils/getAllCountriesFalg";

export default function Sidebar() {
    // const [countries, setCountries] = useState([]);
    //
    // useEffect(() => {
    //     let isMounted = true;
    //
    //     const getData = async () => {
    //         const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=309e3ec0607e4158a447981244852e63`);
    //         const {articles} = await res.json();
    //         if (isMounted) {
    //             setCountries(articles);
    //         }
    //     }
    //     getData()
    //         .catch(err => console.log(err));
    //     return () => { isMounted = false };
    // }, [
    // ])
    // console.log(countries)

    return (
        <div className=" w-[12rem] p-2">
            <h3 className="text-xl py-3">Choice country</h3>
            <ul>
                {allCountries.map(({code, name}) => {
                    return (
                        <li key={code} className="my-2 text-sm flex gap-2">
                            <GetAllCountriesFlag code={code}/>
                            <NavLink to={`/country/${code}`}>
                                {({isActive}) => (
                                    <span
                                        className={isActive ? "underline underline-offset-4 font-medium" : "text-gray-500 hover:text-gray-900"}
                                    >
                                        {name}
                                    </span>
                                )}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

