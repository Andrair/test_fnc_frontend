import React from "react";
import "./upperbar.css"

const Upperbar: React.FC = () => {

    return <div className={"Container-Upperbar"}>
        <div className={"ContentLogo-Upperbar"}></div>
        <div className={"ContentUser-Upperbar"}>
            <p className={"TextUser-Upperbar"}>TORREFACTORA</p>
        </div>
    </div>
}

export default Upperbar