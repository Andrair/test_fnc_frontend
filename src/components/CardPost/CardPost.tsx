import React from "react";
import "./cardpost.css"
import { ThumbsUp } from 'react-feather';

export interface ICardPost {
    image: string;
    description: string;
    likes: number;
    imageUser: string;
    nameUser: string
}

const CardPost: React.FC<ICardPost> = (props: ICardPost) => {
    return <div className={"Container-cardPost"}>
        <div className={"ContentPost-cardPost"}>
            <div className={"BoxImage-cardPost"}>
                <img alt={"imagePost"} style={{width: 180}} src={props.image}/>
            </div>
            <div className={"BoxPost-cardPost"}>
                <div className={"BoxPostText-cardPost"}>
                    <p style={{fontSize: "calc(1vw + 0.5em)", color: "#3c3c3c"}}>{props.description}</p>
                </div>
                <div className={"BoxPostImage-cardPost"}>
                    <ThumbsUp color="#004d40" size={30} />
                    <p style={{fontSize: "calc(1vw + 0.8em)", color:"#004d40"}}>{props.likes}</p>
                </div>
            </div>
        </div>
        <div className={"ContentUser-cardPost"}>
            <img alt={"imageUser"} style={{ width: 50, borderRadius: 50}} src={props.imageUser}/>
            <div><p style={{marginLeft: "0.5em", color: "#00251a"}}>{props.nameUser}</p></div>
        </div>
    </div>
}

export default CardPost