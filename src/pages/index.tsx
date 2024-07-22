// pages/index.tsx
import type { NextPage } from 'next';
import SignIn from '../components/SignIn';

const Home: NextPage = () => {
  return (
    <div className="container">
      <SignIn />
    </div>
  );
};

export default Home;
