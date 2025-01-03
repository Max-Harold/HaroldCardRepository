import React from "react";
import Card from "./Card";

function CardSwitcher() {
    return (
        <div className="flex w-[100%] h-[100vh] bg-black justify-center items-center">
            <Card name="Phil" className="opacity-0" />
            <Card name="Max" />
         </div>
    )
}


export default CardSwitcher