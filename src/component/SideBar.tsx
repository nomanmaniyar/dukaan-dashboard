import React from "react";

function SideBar() {

    return (
        <div className="w-60 bg-[#353C53] h-[1482px] flex flex-col">
            <div className="flex items-center w-full justify-between px-[0.53rem]">
                <div className="flex items-center gap-3 ">
                    <img className="h-10 w-10" src="src\assets\sideBar.png" alt="Side Bar Icon" />
                    <div>
                        <div>Nishyan</div>
                        <div className="text-white/80 underline cursor-pointer">Visit store</div>
                    </div>
                </div>
                <div>
                    <img className="" src="src\assets\ChevronDown.png" alt="Chevron Down Icon" />
                </div>
            </div>
        </div>
    );
}
export default SideBar;