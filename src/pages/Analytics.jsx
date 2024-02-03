import { useState, useEffect } from "react";
import feedbackService from "../services/feedback.service";
import { PieChart, AreaChart, ColumnChart } from 'react-chartkick';
import 'chartkick/chart.js'

function Analytics() {
    const [average, setAverage] = useState(0);
    const [numberFeedbacks, setNumberFeedbacks] = useState(0);
    const [averageWordNumber, setAverageWordNumber] = useState(0);
    const [feedbacksPerMonth, setfeedbacksPerMonth] = useState(0);
    const [month, setMonth] = useState(0);
    const [activeMonth, setActiveMonth] = useState("Jan");
    const [keywords, setKeywords] = useState(null);
    const [clusters, setClusters] = useState(null);
    const [clusterwords, setClusterwords] = useState(null);
    const [timedata, setTimedata] = useState(null);
    const [histogram, setHistogram] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const average = await feedbackService.getAverage();
                setAverage(average.data.averageRating)
                setNumberFeedbacks(average.data.numberFeedbacks)
                setAverageWordNumber(average.data.averageWordNumber)
                setfeedbacksPerMonth(average.data.feedbacksPerMonth)
                setMonth(average.data.feedbacksPerMonth["Jan"])

                const words = await feedbackService.getMostPopularWords();
                setKeywords(words.data.popularWords);

                const clusters = await feedbackService.getClusters();
                setClusters(clusters.data.clusters);
                setClusterwords(clusters.data.clusterKeywords)


                const ratings = await feedbackService.getRatings();
                setTimedata(ratings.data.timeData);
                setHistogram(ratings.data.histogram)

            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [])

    const handleMonth = (el) => {
        console.log(el)
        console.log(feedbacksPerMonth)
        console.log(feedbacksPerMonth[el])
        setMonth(feedbacksPerMonth[el])
        setActiveMonth(el)
    }

    return (
        <div className="bg-gray-100 rounded-lg w-11/12 sm:w-full flex justify-center items-center">
            <div className="flex flex-col w-10/12 justify-center sm:flex-row sm:w-full">
                <div className=" flex-col w-10/12 sm:w-1/4 rounded-lg mt-10 sm:mb-10 sm:ml-10 mx-auto">
                    <div className="flex flex-col p-3 sm:p-0 justify-center items-center w-full sm:h-1/4 bg-[#fdf4f7] rounded-lg mb-1" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)' }}>
                        <h1 className="text-5xl mb-3 sm:mb-10 text-gray-800" >{average}</h1>
                        <h2 className="text-gray-800">Average rating</h2>
                    </div>
                    <div className="flex flex-col p-3 sm:p-0 justify-center items-center    w-full sm:h-1/4 bg-[#fdf4f7] rounded-lg mb-1" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)' }}>
                        <h2 className="text-5xl mb-3 sm:mb-10 text-gray-800">{numberFeedbacks}</h2>
                        <h2 className="text-gray-800"> Number of feedbacks</h2>
                    </div>
                    <div className="flex flex-col p-3 sm:p-0 justify-center items-center   w-full sm:h-1/4 bg-[#fdf4f7] rounded-lg mb-1" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)' }}>
                        <h2 className="text-5xl mb-3 sm:mb-10 text-gray-800"> {averageWordNumber}</h2>
                        <h2 className="text-gray-800"> Words/feedback</h2>
                    </div>
                    <div className="flex flex-col p-3 sm:p-0 justify-center items-center    w-full sm:h-1/4 bg-[#fdf4f7] rounded-lg " style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)' }}>
                        <h2 className="text-5xl mb-3 sm:mb-10 text-gray-800"> {(numberFeedbacks / 12).toFixed(2)}</h2>
                        <h2 className="text-gray-800"> Feedbacks/month</h2>
                    </div>
                </div>

                <div className=" flex-col w-full sm:w-3/4 rounded-lg mt-3 sm:mt-10 mb-7 sm:mr-10 mx-auto" >
                    <div className="flex w-full flex-col sm:flex-row justify-center">
                        <div className="flex justify-center p-8 w-full bg-[#fdf4f7] rounded-lg mb-1 sm:ml-1 sm:mr-1" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)' }}>
                            <div className="flex flex-col items-center  w-full sm:w-9/12 ">
                                <h2 className="text-gray-800">Ratings distribution:</h2>
                                {histogram && <PieChart data={histogram} donut={true} colors={["#4AAEA3", "#7D84B2", "#8FA6CB", "#DBF4A7", "#D5F9DE"]} />}
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center p-8 w-full bg-[#fdf4f7] rounded-lg mb-1" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)' }}>
                            <div className="flex flex-col items-center w-full sm:w-9/12 ">
                                <h2 className="text-gray-800">10 most frequent words:</h2>
                                {keywords && <ColumnChart data={keywords} colors={['#4AAEA3']} />}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center p-8 w-full sm:w-90 bg-[#fdf4f7] rounded-lg sm:ml-1" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)' }}>
                        <div className="flex flex-col items-center w-full">
                            <h2 className="text-gray-800">Ratings over time:</h2>
                            {timedata && <AreaChart data={timedata} colors={['#4AAEA3']} />}
                        </div>
                    </div>
                </div>
            </div>






            {/* <h2>Here are your customer cluster:</h2>
            <h2>Cluster 1:</h2>
            {clusters && clusters[0].map(element => {
                return (
                    <div key={element._id}>
                        {element.feedback}
                    </div>
                )
            })}
            {clusterwords && <PieChart data={clusterwords[0]} />}
            <h2>Cluster 2:</h2>
            {clusters && clusters[1].map(element => {
                return (
                    <div key={element._id}>
                        {element.feedback}
                    </div>
                )
            })}
            {clusterwords && <PieChart data={clusterwords[1]} />}
            <h2>Cluster 3:</h2>
            {clusters && clusters[2].map(element => {
                return (
                    <div key={element._id}>
                        {element.feedback}
                    </div>
                )
            })}
            {clusterwords && <PieChart data={clusterwords[2]} />} */}
        </div>
    );
}


export default Analytics