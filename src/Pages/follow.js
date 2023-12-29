import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../Context/AuthContext';


const Follow = ({ userId }) => {
  const [following, setFollowing] = useState([]);
  const [follower, setFollower] = useState([]);

  const [loading, setLoading] = useState(true);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchFollowing = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/followlist/", {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(token.access),
          }
        });
        const data = response.data;
        // console.log('user', data);
        console.log(data['following']);
        setFollowing(data['following']);
        setFollower(data['followers']);
      } catch (error) {
        console.error('Error fetching following:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFollowing();
  }, [userId, token.access]);

  if (loading) {
    return <p>Loading...</p>;
  }
  const followingUsers = following.map((follow) => follow.following_user);

  return (
    <div>
      <h2>Following</h2>
      <ul>
        {followingUsers.map((user) => (
          <li key={user.id}>
            <p>ID: {user.id}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
      <h2>Followers</h2>
      <ul>
        {follower.map((follow) => (
          <li key={follow.id}>
            <p>ID: {follow.user.id}</p>
            <p>Username: {follow.user.username}</p>
            <p>Email: {follow.user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Follow;

