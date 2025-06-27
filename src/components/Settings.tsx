import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToggleMode from "./UI/Toggle";

export default function Settings() {
    return (
        <div className="flex items-center justify-center gap-2 sm:gap-5">
            <div className="scale-100">
                <ToggleMode />
            </div>
            {/* <FontAwesomeIcon icon={faGear} className="scale-150 sm:scale-200 cursor-pointer" /> */}
        </div>
    )
}