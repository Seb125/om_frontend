import { useState, useEffect } from "react";
import companyService from "../services/company.service";
import Spinner from '../components/Spinner';
import { Descriptions, Button } from 'antd';

function CompanyDetails() {
    const [company, setCompany] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await companyService.getCompany();
                const company = response.data
                const items = [
                    { key: '1', label: 'Company Name', children: company.name },
                    { key: '2', label: 'Company ID', children: company._id },
                    { key: '3', label: 'Access Token', children: company.accessToken },
                    { key: '4', label: 'Created At', children: company.createdAt },
                ];
                setCompany(items);
            } catch (error) {
                console.error("Error fetching company data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

    }, [])

    const handleRegenerateToken = async () => {
        try {
            setLoading(true);
            const response = await companyService.regenerateAccessToken();
            const company = response.data
            const items = [
                { key: '1', label: 'Company Name', children: company.name },
                { key: '2', label: 'Company ID', children: company._id },
                { key: '3', label: 'Access Token', children: company.accessToken },
                { key: '4', label: 'Created At', children: company.createdAt },
            ];
            setCompany(items);
        } catch (error) {
            console.error("Error regenerating access token:", error);
        } finally {
            setLoading(false);
        }
    };



    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
                company && (
                    <>
                        <Descriptions title="Company Info" column={1} bordered items={company} />
                        <br></br>
                        <br></br>
                        <p>If you have misplaced your access token, you can obtain a new one by using the button provided below.</p>
                        <br></br>
                        <br></br>
                        <Button onClick={handleRegenerateToken}>
                            Regenerate Access Token
                        </Button>
                    </>
                )
            )}
        </div>
    );
}

export default CompanyDetails;
