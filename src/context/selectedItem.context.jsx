import React, { useState, useEffect } from "react";

const SelectedItemContext = React.createContext();

function SelectedItemProviderWrapper(props) {
    const [dashboard, setDashboard] = useState(false)
    const [feedback, setFeedback] = useState(false)
    const [companyDetails, setCompanyDetails] = useState(false)
    const [analytics, setAnalytics] = useState(false)
    const [strategicMeeting, setStrategicMeeting] = useState(false)
    const [helpCenter, setHelpCenter] = useState(false)
    const [profileImage, setProfileImage] = useState("https://readymadeui.com/profile_2.webp")
   

    useEffect(() => {
        setDashboard(true)
    }, []);

    const reset = () => {
        setDashboard(false)
        setFeedback(false)
        setCompanyDetails(false)
        setAnalytics(false)
        setHelpCenter(false)
        setStrategicMeeting(false)
    }

    const selectDashboard = () => {
        reset()
        setDashboard(true)
    }

    const selectFeedback = () => {
        reset()
        setFeedback(true)
    }

    const selectCompanyDetails = () => {
        reset()
        setCompanyDetails(true)
    }
    const selectAnalytics = () => {
        reset()
        setAnalytics(true)
    }
    const selectHelpCenter = () => {
        reset()
        setHelpCenter(true)
    }
    const selectStrategicMeeting = () => {
        reset()
        setStrategicMeeting(true)
    }

    return (
        <SelectedItemContext.Provider
            value={{
                dashboard,
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
                selectStrategicMeeting,
                setProfileImage,
                profileImage
            }}
        >
            {props.children}
        </SelectedItemContext.Provider>
    );
}

export { SelectedItemProviderWrapper, SelectedItemContext };