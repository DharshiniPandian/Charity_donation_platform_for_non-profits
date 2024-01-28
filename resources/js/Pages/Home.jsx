import React from 'react';
import './Home.css';

export default function Home({ users, organisers, socialMedia, organisersCertificate }) {
  const userMap = {};
  users.forEach((user) => {
    userMap[user.id] = user;
  });

  return (
    <div>
      <div className="organisers-container">
        <h3>FundRaisers</h3>
        {organisers.map((organiser) => (
          <div key={organiser.id} className="organiser-item">
            {userMap[organiser.user_id] && (
              <div>
                <strong>Name:</strong> {userMap[organiser.user_id].name}
              </div>
            )}
            <div>
              <strong>Email:</strong> {userMap[organiser.user_id]?.email || 'N/A'}
            </div>
            <div>
              <strong>Phone Number:</strong> {organiser.phone_number}
            </div>
            <div>
              <strong>Address:</strong> {organiser.address}
            </div>
            <div>
              <strong>Description:</strong> {organiser.description}
            </div>
            
            {socialMedia.map((social) => social.user_id === organiser.user_id && (
              <div key={social.id}>
                <strong>Facebook:</strong> {social.facebook || 'N/A'} <br />
                <strong>LinkedIn:</strong> {social.linkedin || 'N/A'} <br />
                <strong>Twitter:</strong> {social.twitter || 'N/A'} <br />
                <strong>Website:</strong> {social.website || 'N/A'} <br />
              </div>
            ))}
           

          </div>
        ))}
      </div>
    </div>
  );
}
