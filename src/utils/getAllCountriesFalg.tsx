import {Country} from "../types/types";
import * as Flags from "country-flag-icons/react/3x2";

const GetAllCountriesFlag = ({code}: {
    code: Country["code"];
}): JSX.Element => {
    const Flag = Flags[code as keyof typeof Flags];
    return <Flag className="w-6"/>;
}
export default GetAllCountriesFlag;
