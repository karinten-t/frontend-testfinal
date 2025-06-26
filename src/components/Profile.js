import { useState, useEffect } from 'react';
import { getProfile, updateProfile } from '../utils/api';
import '../styles/Profile.css';

function Profile() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [updateLoading, setUpdateLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        setUser(response);
        setUsername(response.username);
        setEmail(response.email);
      } catch (err) {
        setError('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    setUpdateLoading(true);
    setError('');
    try {
      await updateProfile({ username, email });
      setUser({ ...user, username, email });
    } catch (err) {
      setError('Failed to update profile');
    } finally {
      setUpdateLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          aria-label="Username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email"
        />
      </div>
      <button onClick={handleUpdate} disabled={updateLoading}>
        {updateLoading ? 'Updating...' : 'Update Profile'}
      </button>
    </div>
  );
}

export default Profile;