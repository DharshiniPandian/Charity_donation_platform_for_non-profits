import React, { useState } from 'react';
import axios from 'axios';

const DocumentSubmissionForm = () => {
    const [formData, setFormData] = useState({
      
    });

    const submitForm = async () => {
     
        const response = await axios.post('/api/submit-document', formData);

       
        if (response.data.success) {
            alert('Document submitted successfully!');
        } else {
            alert('Failed to submit document.');
        }
    };

    return (
        <div>
            <div className="mb-4">
          <label htmlFor="certificate" className="block text-sm font-medium text-gray-600">
            Certificate (PDF)
          </label>
          <input
            id="certificate"
            name="certificate"
            type="file"
            accept=".pdf"
            className="mt-1 block w-full"
            required
          />
        </div>
            <button onClick={submitForm}>Submit Document</button>
        </div>
    );
};

export default DocumentSubmissionForm;
