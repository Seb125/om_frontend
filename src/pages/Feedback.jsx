import { useState, useEffect } from 'react';
import feedbackService from '../services/feedback.service';
import { Space, Table } from 'antd';
import Spinner from '../components/Spinner';

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
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchFeedbackData = async () => {
            try {
                setLoading(true);
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
            } finally {
                setLoading(false);
            }
        };

        fetchFeedbackData();
    }, []);
    const handleTableChange = (pagination) => {
        setPage(pagination.current);
        setPageSize(pagination.pageSize);
    }
    return (
        <>
            {
                loading ? (
                    <Spinner />
                ) : (feedbackData &&
                    <div className='bordered-table'>
                        <Table columns={columns} dataSource={feedbackData} onChange={handleTableChange} pagination={{ total: feedbackData?.length, current: page, pageSize: pageSize }} />
                    </div>
                )
            }
        </>
    )
}

export default Feedback