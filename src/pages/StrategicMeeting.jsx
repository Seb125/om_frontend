import { useState, useEffect } from 'react';
import { Calendar } from 'antd';
import companyService from '../services/company.service';

const StrategicMeeting = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [meeting, setMeeting] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleSelect = (value) => {
    console.log("Value", typeof (value.$d.toDateString()))
    setSelectedDay(value.$d.toDateString());
    //console.log('Selected day:', value.toDate());
  };

  const handleDate = async () => {
    setMeeting((prevMeeting) => !prevMeeting);
  }

  useEffect(() => {
    const savedMeeting = async () => {
      const data = await companyService.getMeeting();
      console.log(data.data)
      if (data.data.meeting) {
        setMeeting(true);
        setSelectedDay(data.data.meeting);
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
    savedMeeting();
  }, [])

  useEffect(() => {
    console.log("Meeting", meeting)
    console.log(loading)
    const meetingRequest = async () => {

      if (meeting) {
        console.log("hello", selectedDay)
        const body = { meeting: selectedDay }
        await companyService.postMeeting(body)
      } else {
        console.log("dont do that")
        await companyService.deleteMeeting();
      }
    }
    if (!loading)
      meetingRequest();
  }, [meeting])

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="mt-8 text-3xl font-bold text-black text-center sm:text-left sm:text-4xl">Strategic Meeting</h1>

      <p className="my-5 text-gray-600 text-md leading-9 text-justify sm:text-left">
        Hello valued customer! Our strategic analysis page provides information about the valuable services we offer to guide investment banks in the IPO process for unicorn companies.
        On our strategic analysis page, you can access detailed information about Clusterwords Analysis, Ratings Analysis, Most Frequent Words Analysis, and other analysis types to gain insights that will help us better understand your business.
        If you would like to request a detailed meeting or get more information, please arrange your appointment. We are eager to serve you better!

      </p>

      {meeting && <h1 className="mt-8 mb-10 text-3xl font-bold text-black text-center sm:text-left sm:text-4xl">Your next strategic meeting: {selectedDay}</h1>}

      <div className="mb-4">
        <Calendar onSelect={handleSelect} />
      </div>

      <button onClick={handleDate} className="bg-rose-400 text-white py-2 px-4 rounded-full hover:bg-blue-600 w-full md:w-auto">
        {meeting ? <p>Cancel meeting</p> : <p>Request Meeting</p>}
      </button>
    </div >
  );

};

export default StrategicMeeting;
