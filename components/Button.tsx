import Image from "next/image"
import { IconType } from "react-icons/lib/esm/iconBase"
type ButtonProps = {
    type: 'button' | 'submit'
    txt : string,
    icon?:  IconType,
    variant : string,
    
}

const Button = ({type, txt, variant, icon : Icon} : ButtonProps) => {
  return (
    <button type={type} 
className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
    {Icon && <Icon size={"1.8rem"} />}
    <label className="bold-16 whitespace-nowrap cursor-pointer">{txt}</label>
    </button>
  )
}

export default Button