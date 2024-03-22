import { useContext } from "react"
import { ActionButtonContext } from "./ActionButtonContext";

export default function CardActions() {
  const buttonText = useContext(ActionButtonContext);

  return (
    <div>
      <button>{buttonText}</button>
    </div>
  )
}