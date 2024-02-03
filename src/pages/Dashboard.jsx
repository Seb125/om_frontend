import React, { useState, useEffect } from 'react';
import feedbackService from '../services/feedback.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faChartLine, faChartArea } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
    const [feedCount, setFeedCount] = useState(0);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const fetchData = async () => {
            try {
                const average = await feedbackService.getAverage();
                console.log(average)
                setFeedCount(average.data.numberFeedbacks);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

        // Set up a timer to update estimated time every second
        const timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  sm:gap-4 sm:p-4 h-full">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-10 m-3 sm:m-10 shadow-md flex flex-col items-center">
                <h2 className="text-xl sm:text-3xl font-semibold mb-10">Total Feedbacks</h2>
                <p className="text-xl sm:text-3xl">{feedCount}</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-10 m-3 sm:m-10 flex flex-col items-center">
                <h2 className="text-xl sm:text-3xl font-semibold mb-10">Contract Date with Company</h2>
                <h2 className="text-xl sm:text-3xl">25.01.24</h2>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-10 m-3 sm:m-10 flex flex-col items-center">
                <h2 className="text-xl sm:text-3xl font-semibold mb-10">Estimated Time until Stock Market</h2>
                <p className="text-xl sm:text-3xl mt-5"><Timer className="text-xl sm:text-3xl" currentTime={currentTime} /></p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-md p-10 m-3 sm:m-10 flex flex-col items-center">
                <h2 className="text-xl sm:text-3xl font-semibold mb-10">Analysis</h2>
                <p className="my-5 text-gray-600 text-md leading-9 text-justify sm:text-left">With your current basic abo you get 7 descriptive analyses. For more in-depth data modeling, upgrade to premium!</p>
                <AnalyticsIcons className="text-xl sm:text-3xl"/>
            </div>
        </div>
        </div>
    );
}

const Timer = ({ currentTime }) => {
    const timeDifference = new Date('2024-04-25T00:00:00Z') - currentTime.getTime();
    const secondsRemaining = Math.floor(timeDifference / 1000);
    const hours = Math.floor(secondsRemaining / 3600);
    const minutes = Math.floor((secondsRemaining % 3600) / 60);
    const seconds = secondsRemaining % 60;

    return (
        <div>
            {hours > 0 && <span>{`${hours}h `}</span>}
            {minutes > 0 && <span>{`${minutes}m `}</span>}
            {seconds > 0 && <span>{`${seconds}s`}</span>}
        </div>
    );
};

const AnalyticsIcons = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faChartBar} className="text-blue-500 text-2xl md:text-3xl lg:text-4xl xl:text-5xl mr-2" />
            <FontAwesomeIcon icon={faChartLine} className="text-green-500 text-2xl md:text-3xl lg:text-4xl xl:text-5xl mr-2" />
            <FontAwesomeIcon icon={faChartArea} className="text-orange-500 text-2xl md:text-3xl lg:text-4xl xl:text-5xl" />
        </div>
    );
};

export default Dashboard;
