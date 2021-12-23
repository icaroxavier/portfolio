import Image from "next/image";
import { ProjectContainer } from "../styles/components/Project.style";
import Link from 'next/link'

export default function Project(props){
    return(
        <ProjectContainer>
            <h2>{' - '}{props.title}</h2>
            <div className="imageContainer">
                <Image src={props.imagePath} layout="fill" alt="Project Image"/>
            </div>
            <p>{' > '}{props.description}</p>
            {props.link && <Link href={props.link}><a>{' > '}Link de acesso ao projeto</a></Link>}
        </ProjectContainer>
    )
}