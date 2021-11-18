import React from 'react'
import { Button } from 'reactstrap';

const Home = ({ history }) => {
  return (
    <section className="flex-all-center h-100">
      <Button
        color="primary"
        onClick={() => history.push('./generate-business-plan')}
      >
        Generate Business Plan
    </Button>
    </section>
  );
};

export default Home;