import Title from "./components/Title";
import Content from "./components/content";

function App() {
  const htmlContent: string = "<h1> hello alireza!, hello </h1>"
  return (
    <>
      <Title collegeType="react" />
      <p>Welcome to Quera React + TS College</p>
      <Content>
        <p>Welcome to Quera React + TS College</p>
      </Content>
      <Content>
        <div dangerouslySetInnerHTML={{__html: htmlContent}}></div>
      </Content>
    </>
  );
}

export default App
