import { useNavigate } from "react-router-dom";

const Button = ({ children, route, style }) => {
  const nav = useNavigate()
  const handleClick = () => {
    console.log(route)
    nav(route)
  }

  return (
    <button type="button" style={style} onClick={handleClick} className="w-full px-5 py-4 rounded-full text-white font-[700] hover:bg-secondary-cyangradient bg-secondary-bluegradient ">
      {children}
    </button>
  );
};

export default Button