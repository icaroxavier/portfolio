import Image from "next/image";
import { ProjectContainer } from "../styles/components/project.style";

export default function Project(props){
    return(
        <ProjectContainer>
            <h2>{' - '}{props.title}</h2>
            <div className="imageContainer">
                <Image 
                    src={props.imagePath} 
                    layout="fill" 
                    alt="Project Image"
                    placeholder='blur'
                    blurDataURL="/blur.jpg"
                />
            </div>
            <p>{' > '}{props.description}</p>
            {props.link && <a href={props.link} target="_blank" rel="noreferrer">{' > '}Link de acesso ao projeto</a>}
        </ProjectContainer>
    )
}