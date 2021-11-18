import React from 'react'
import { Alert, Button } from 'reactstrap';

const AlertMsg = ({ history, step }) => {

  return step === 'success' && (
    <div>
      <Alert>
        <h4 className="alert-heading">
          Well done!
        </h4>
        <p>Your answers are submitted successfully</p>
        <hr />
        <p className="mb-0">
          Whenever you need to, you can submit your answers again.
        </p>
      </Alert>
      <Button
        color="primary"
        onClick={() => history.push('/')}
        >
          Go Home
      </Button>
    </div>
  );
};

export default AlertMsg;