import { useEffect } from "react";
import "./Button.css"

interface Props {
  label: string;
  parentMethod: () => void;
}

export const Button = ({label, parentMethod}: Props) => {

  useEffect(() => {
    console.log('useEffect working')
  }, [label])

  return (
    <button className="custom" onClick={parentMethod}>
      {label}
    </button>
  )
}