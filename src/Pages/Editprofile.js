import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import axios from 'axios';

const EditProfile = () => {
  const { user, token } = useContext(AuthContext);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://127.0.0.1:8000/userprofile/", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + String(token.access),
        },
      });

      if (response.status === 200) {
        const data = await response.data;
        console.log(data);
        setProfileData(data);
      } else {
        setError('Error fetching data');
      }
    } catch (error) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {profileData && (
        <div>
          <p>User ID: {profileData.username}</p>
          {/* Display other profile data as needed */}
        </div>
      )}
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};

export default EditProfile;
