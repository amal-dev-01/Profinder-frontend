import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';

const Userlist = ({ isFollowing, onToggle }) => {

  const {id}= useParams()
  const [loading, setLoading] = useState(false);
  const {token}= useContext(AuthContext)

  const handleToggle = async () => {
    if (loading) return; // Prevent multiple simultaneous requests

    try {
      setLoading(true);

      const response = await fetch(`http://127.0.0.1:8000/${id}/follow/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.access}`, // Replace with your actual access token
        },
      });

      if (!response.ok) {
        throw new Error('Failed to toggle follow status');
      }

      // Notify the parent component that the follow status has changed
      onToggle();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleToggle}>
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  );
};

export default Userlist;
