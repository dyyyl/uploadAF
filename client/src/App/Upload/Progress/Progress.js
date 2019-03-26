import PropTypes from 'prop-types';
import React from 'react';

import ProgressInner from './Components/ProgressInner';
import ProgressOuter from './Components/ProgressOuter';

const Progress = ({ progress }) => (
  <ProgressOuter>
    <ProgressInner style={{ width: `${progress}%` }} />
  </ProgressOuter>
);

Progress.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default Progress;
