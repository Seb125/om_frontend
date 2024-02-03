import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart3Icon,
  LayoutDashboard,
  HelpCircleIcon,
  MessagesSquareIcon,
  Building2Icon,
  LogOutIcon,
  HeartHandshakeIcon
} from "lucide-react";
import { AuthContext } from "../context/auth.context";

import RightArrowIcon from "./../assets/icons/rightArrow.svg";

function Sidebar(props) {
  const { selectDashboard,
    selectFeedback,
    selectHelpCenter,
    selectCompanyDetails,
    selectAnalytics,
    selectStrategicMeeting } = props;
  const [isExpanded, setIsExpanded] = useState(window.innerWidth > 786 ? true : false);
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const navigate = useNavigate();

  const { logOutUser } = useContext(AuthContext);


  const sidebarLinks = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      onClick: () => {
        selectDashboard()
      }
    },
    {
      name: "Feedbacks",
      icon: MessagesSquareIcon,
      onClick: () => {
        selectFeedback()
      }
    },
    {
      name: "Company Details",
      icon: Building2Icon,
      onClick: () => {
        selectCompanyDetails()
      }
    },
    {
      name: "Analytics",
      icon: BarChart3Icon,
      onClick: () => {
        selectAnalytics()
      }
    },
    {
      name: "Strategic Meeting",
      icon: HeartHandshakeIcon,
      onClick: () => {
        selectStrategicMeeting()
      }
    },
    {
      name: "Help Center",
      icon: HelpCircleIcon,
      onClick: () => {
        selectHelpCenter()
      }
    },
    {
      name: "Logout",
      icon: LogOutIcon,
      onClick: () => {
        logOutUser()
        navigate("/")
      }
    }
  ]

  return (
    <div className={
      "py-6 h-screen flex flex-col border border-r-1 bg-white relative" +
      (isExpanded ? " px-6" : " px-4")
    }>
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[#FF8C8C] flex justify-center items-center"
      >
        <img src={RightArrowIcon} className="w-2" />
      </div>
      {/* <div className="logo-div flex space-x-4 items-center">
        <img src={Logo} onClick={() => {
          const item = sidebarLinks[0]
          item.onClick()
          setActiveNavIndex(0)
        }} />
      </div>  */}
      <div className="flex flex-col space-y-8">
        {sidebarLinks.map((item, index) => {
          return (
            <div key={index} className="nav-links w-full cursor-pointer" onClick={() => setActiveNavIndex(index)}>
              <div className={`${!isExpanded ? 'justify-center' : ''} flex space-x-3 w-full p-2 rounded ${activeNavIndex === index ? "bg-[#FF8C8C] text-white" : ""}`}
                onClick={item.onClick}
              >
                <item.icon />
                <span className={!isExpanded ? "hidden" : "flex items-center"}>{item.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
