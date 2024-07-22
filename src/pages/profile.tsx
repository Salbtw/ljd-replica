import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const router = useRouter();

  // Debug log to check token
  useEffect(() => {
    console.log('User Token:', user.token); // Check token here

    if (!user.token) {
      router.push('/');
    }
  }, [user.token, router]);

  if (!user.token) {
    return null; // Or loading spinner
  }

  return (
    <div>
      <h1>Profile</h1>
      {/* Display user info */}
    </div>
  );
};

export default Profile;
