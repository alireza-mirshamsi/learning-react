export default function Title(props: { collegeType: string }){
    return(
        <h1 className="text-red" onClick={() => alert("welcome to quera!")}>
            {props.collegeType === "react" ? "React" : "Front-End"} collegeType
        </h1>
    )
}