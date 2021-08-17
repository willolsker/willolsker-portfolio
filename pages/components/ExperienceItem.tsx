import {useState} from "react";

const ExperienceItem = (props: {
    img: string,
    name: string,
    children: string,
    color?: string,
    textColor?: string,
    experience: number
}) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="experience-item" style={{backgroundColor: props.color || "white"}}
             onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <img src={props.img} className={hovered ? "hidden" : ""} alt=""/>
            <div className={hovered ? "" : "hidden"} style={{color: props.textColor || "#2e2e2e"}}>
                <h1>{props.name}</h1>
                <h3>{props.experience} {props.experience === 1 ? "year" : "years"} of experience</h3>
                {props.children}
            </div>
        </div>
    );
}

export default ExperienceItem;