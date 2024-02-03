import { useState, useEffect } from 'react';
import feedbackService from '../services/feedback.service';
import { Space, Table } from 'antd';

const columns = [
    {
        title: 'Review',
        dataIndex: 'review',
        key: 'review'
    },
    {
        title: 'Rating',
        dataIndex: 'rating',
        key: 'rating',
        sorter: (a, b) => a.rating - b.rating
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        sorter: (a, b) => Date.parse(a.date) - Date.parse(b.date)
    },

]


function Feedback() {
    const [feedbackData, setFeedbackData] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(20);

    useEffect(() => {
        const fetchFeedbackData = async () => {
            try {
                const response = await feedbackService.getFeedbackData()
                const feedback = response.data
                const data = [];
                feedback.map(({ _id, feedback, rating, createdAt }, index) => {
                    data.push({
                        key: '1',
                        review: feedback,
                        rating: rating,
                        date: createdAt
                    })
                })
                setFeedbackData(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchFeedbackData();
    }, []);
    const handleTableChange = (pagination) => {
        setPage(pagination.current);
        setPageSize(pagination.pageSize);
    }
    return (
        <div className='bordered-table'>
            <Table columns={columns} dataSource={feedbackData} onChange={handleTableChange} pagination={{ total: feedbackData?.length, current: page, pageSize: pageSize }} />
        </div>
    )
}

export default Feedback
