import { useState, useEffect } from "react";
import feedbackService from "../services/feedback.service";
import { PieChart, AreaChart, ColumnChart } from "react-chartkick";
import "chartkick/chart.js";
import Spinner from "../components/Spinner";

function Analytics() {
  const [averageRating, setAverageRating] = useState(0);
  const [numberFeedbacks, setNumberFeedbacks] = useState(0);
  const [averageWordNumber, setAverageWordNumber] = useState(0);
  const [keywords, setKeywords] = useState(null);
  const [timedata, setTimedata] = useState(null);
  const [histogram, setHistogram] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetching all the data of the logged in user/company with methods of the feedback Service class
  useEffect(() => {
    const fetchData = async () => {
      try {
        // until data is available loading is set to true and a Spinner is displayed
        setLoading(true);
        // getAverage() method makes a request to /average endpoint in the backend, fetching descriptive statistics
        const averageData = await feedbackService.getAverage();
        setAverageRating(averageData.data.averageRating);
        setNumberFeedbacks(averageData.data.numberFeedbacks);
        setAverageWordNumber(averageData.data.averageWordNumber);
        // getMostPopularWords() method makes a request to /keywords endpoint in the backend, fetching most popular words in all feebacks
        const words = await feedbackService.getMostPopularWords();
        setKeywords(words.data.popularWords);
        // getRatings() method makes a request to /ratings endpoint in the backend, fetching ratings with timestamps and rating histogram data
        const ratings = await feedbackService.getRatings();
        setTimedata(ratings.data.timeData);
        setHistogram(ratings.data.histogram);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="bg-gray-100 rounded-lg w-11/12 sm:w-full flex justify-center items-center">
          <div className="flex flex-col w-10/12 justify-center sm:flex-row sm:w-full">
            <div className=" flex-col w-10/12 sm:w-1/4 rounded-lg mt-10 sm:mb-10 sm:ml-10 mx-auto">
              <div
                className="flex flex-col p-3 sm:p-0 justify-center items-center w-full sm:h-1/4 bg-[#fdf4f7] rounded-lg mb-1"
                style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.4)" }}
              >
                <h1 className="text-5xl mb-3 sm:mb-10 text-gray-800">
                  {averageRating}
                </h1>
                <h2 className="text-gray-800">Average rating</h2>
              </div>
              <div
                className="flex flex-col p-3 sm:p-0 justify-center items-center    w-full sm:h-1/4 bg-[#fdf4f7] rounded-lg mb-1"
                style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.4)" }}
              >
                <h2 className="text-5xl mb-3 sm:mb-10 text-gray-800">
                  {numberFeedbacks}
                </h2>
                <h2 className="text-gray-800"> Number of feedbacks</h2>
              </div>
              <div
                className="flex flex-col p-3 sm:p-0 justify-center items-center   w-full sm:h-1/4 bg-[#fdf4f7] rounded-lg mb-1"
                style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.4)" }}
              >
                <h2 className="text-5xl mb-3 sm:mb-10 text-gray-800">
                  {" "}
                  {averageWordNumber}
                </h2>
                <h2 className="text-gray-800"> Words/feedback</h2>
              </div>
              <div
                className="flex flex-col p-3 sm:p-0 justify-center items-center    w-full sm:h-1/4 bg-[#fdf4f7] rounded-lg "
                style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.4)" }}
              >
                <h2 className="text-5xl mb-3 sm:mb-10 text-gray-800">
                  {" "}
                  {(numberFeedbacks / 12).toFixed(2)}
                </h2>
                <h2 className="text-gray-800"> Feedbacks/month</h2>
              </div>
            </div>

            <div className=" flex-col w-full sm:w-3/4 rounded-lg mt-3 sm:mt-10 mb-7 sm:mr-10 mx-auto">
              <div className="flex w-full flex-col sm:flex-row justify-center">
                <div
                  className="flex justify-center p-8 w-full bg-[#fdf4f7] rounded-lg mb-1 sm:ml-1 sm:mr-1"
                  style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.4)" }}
                >
                  <div className="flex flex-col items-center  w-full sm:w-9/12 ">
                    <h2 className="text-gray-800">Ratings distribution:</h2>
                    {/* the requency distribution of possible ratings is the input data for the Pie Chart, histogram = { '1': 6, '2': 6, '3': 6, '4': 17, '5': 17 } */}
                    {histogram && (
                      <PieChart
                        data={histogram}
                        donut={true}
                        colors={[
                          "#4AAEA3",
                          "#7D84B2",
                          "#8FA6CB",
                          "#DBF4A7",
                          "#D5F9DE",
                        ]}
                      />
                    )}
                  </div>
                </div>
                <div
                  className="flex flex-col justify-center items-center p-8 w-full bg-[#fdf4f7] rounded-lg mb-1"
                  style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.4)" }}
                >
                  <div className="flex flex-col items-center w-full sm:w-9/12 ">
                    <h2 className="text-gray-800">10 most frequent words:</h2>
                    {/*  most frequent words used in the feedbacks, keywords = { service: 19, products: 17, quality: 17, ....} */}
                    {keywords && (
                      <ColumnChart data={keywords} colors={["#4AAEA3"]} />
                    )}
                  </div>
                </div>
              </div>

              <div
                className="flex flex-col justify-center items-center p-8 w-full sm:w-90 bg-[#fdf4f7] rounded-lg sm:ml-1"
                style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.4)" }}
              >
                <div className="flex flex-col items-center w-full">
                  <h2 className="text-gray-800">Ratings over time:</h2>
                  {/* ratings with timestamps sorted in the backend, timedata= {'Mon Feb 13 2023 09:03:05 GMT+0100 (Central European Standard Time)': 3.0903846153846155,
                   'Fri Feb 17 2023 15:07:24 GMT+0100 (Central European Standard Time)': 3.2721153846153843, ..... */}
                  {timedata && (
                    <AreaChart data={timedata} colors={["#4AAEA3"]} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Analytics;
