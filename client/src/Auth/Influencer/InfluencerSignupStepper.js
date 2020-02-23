import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Stepper from '@material-ui/core/Stepper';
import clsx from 'clsx';
import Check from '@material-ui/icons/Check';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import SignupInfluencer from './SignupInfluencer';
import InstagramCheck from './InstagramCheck';

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)'
  },
  active: {
    '& $line': {
      borderColor: '#784af4'
    }
  },
  completed: {
    '& $line': {
      borderColor: '#784af4'
    }
  },
  line: {
    borderColor: '#eaeaf0',
    borderWidth: 1,
    borderRadius: 1
  }
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center'
  },
  active: {
    color: '#784af4'
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor'
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18
  }
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool
};

const getSteps = () => {
  return ['Verify Instagram account', 'Create an account', 'Go to Dashboard'];
};

const InfluencerSignupStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [instagramAccount, setInstagramAccount] = useState('');
  const steps = getSteps();

  const isStepFailed = step => {
    return step === 0;
  };

  const handleNext = async instagram => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setInstagramAccount(instagram);
  };

  const getStepContent = step => {
    switch (step) {
      case 0:
        return <InstagramCheck handleNext={handleNext} />;
      case 1:
        return <SignupInfluencer instagramAccount={instagramAccount} />;
      case 2:
        return 'All good to go !';
      default:
        return 'Unknown step';
    }
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps} connector={<QontoConnector />}>
              <StepLabel StepIconComponent={QontoStepIcon} {...labelProps}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography>All steps completed - you&apos;re finished</Typography>
          </div>
        ) : (
          <div>{getStepContent(activeStep)}</div>
        )}
        ;
      </div>
    </div>
  );
};

export default InfluencerSignupStepper;
