import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DocumentDetails = () => {
    const [documentDetails, setDocumentDetails] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/api/document-details');
            setDocumentDetails(response.data);
        };

        fetchData();
    }, []);

    const verifyDocument = async () => {
        const response = await axios.post('/api/verify-document');
        if (response.data.success) {
            alert('Document verified successfully!');
        } else {
            alert('Failed to verify document.');
        }
    };

    return (
        <div>
            <h2>Document Details</h2>
            <ul>
                {documentDetails.map((detail) => (
                    <li key={detail.id}>{detail.name}: {detail.value}</li>
                ))}
            </ul>
            <button onClick={verifyDocument}>Verify Document</button>
        </div>
    );
};

export default DocumentDetails;
