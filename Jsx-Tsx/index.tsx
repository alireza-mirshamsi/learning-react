interface propsType {
    name: string;
}
  
function TitleElement(props: propsType) {
    return <h1>Hello {props.name}</h1>;
}