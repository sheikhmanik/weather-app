import Place from "./Place";
import Search from "./Search";
import Settings from "./Settings";

export default function Header() {

    return (
        <div className="fixed bg-gray-200 dark:bg-gray-800 w-full px-5 py-4 flex items-center justify-center">
            <div className="container mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-around gap-3">
                <div className="w-full flex items-center justify-center gap-3">
                    <Search/>
                    <div className="sm:hidden flex"><Settings/></div>
                </div>
                <div className="w-full flex items-center justify-between gap-2 text-start">
                    <div><Place/></div>
                    <div className="hidden sm:flex"><Settings/></div>
                </div>
            </div>
        </div>
    )
}