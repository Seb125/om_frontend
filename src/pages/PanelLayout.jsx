import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { SelectedItemContext } from "../context/selectedItem.context";
import Dashboard from "./Dashboard"
import Feedback from "./Feedback";
import CompanyDetails from "./CompanyDetails";
import Analytics from "./Analytics";
import HelpCenter from "./HelpCenter";
import StrategicMeeting from "./StrategicMeeting";
import Navbar from "../components/Navbar";

function PanelLayout() {
    const { dashboard,
        feedback,
        companyDetails,
        helpCenter,
        analytics,
        strategicMeeting,
        selectDashboard,
        selectFeedback,
        selectHelpCenter,
        selectCompanyDetails,
        selectAnalytics,
        selectStrategicMeeting } = useContext(SelectedItemContext)
    return (
        <>
            <Navbar />

            <div className="flex">
                <Sidebar selectDashboard={selectDashboard}
                    selectFeedback={selectFeedback}
                    selectAnalytics={selectAnalytics}
                    selectCompanyDetails={selectCompanyDetails}
                    selectHelpCenter={selectHelpCenter}
                    selectStrategicMeeting={selectStrategicMeeting}
                />
                <main className="grow">
                    {/* <div>
                    <div className="top-0 right-0 absolute">
                        <img className="inline-block h-14 w-14 mt-2 mr-2  rounded-full ring-2 ring-white" src={DefaultAvatar} alt="avatar" />
                    </div>
                    <div className="mt-2 top-0 right-0 absolute w-48 bg-white rounded-lg shadow-xl">
                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Account settings</a>
                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Support</a>
                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Sign out</a>
                    </div>
                </div> */}

                    <div className="flex flex-col py-10 px-4 sm:px-16 h-screen overflow-y-auto w-full">
                        {dashboard && <Dashboard />}
                        {feedback && <Feedback />}
                        {companyDetails && <CompanyDetails />}
                        {analytics && <Analytics />}
                        {helpCenter && <HelpCenter />}
                        {strategicMeeting && <StrategicMeeting />}
                    </div>
                </main>
            </div>
        </>
    );
}

export default PanelLayout;