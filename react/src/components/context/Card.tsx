import { ActionButtonContext } from "./ActionButtonContext";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

export default function Card() {
  return (
    <div style={{ border: "1px solid black", width: "400px", padding: "8px" }}>
      <ActionButtonContext.Provider value="Click Me!!!">
        <CardHeader title="Header" date={new Date().toDateString()} />
        <hr />
        <CardBody />
      </ActionButtonContext.Provider>
    </div>
  );
}
