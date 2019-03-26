import PropTypes from 'prop-types';
import React, { useState } from 'react';

import fileListToArray from '../../../shared/helpers/fileListToArray';
import upload from '../../../shared/svg/baseline-cloud_upload-24px.svg';

import Container from './Components/Container';
import FileInput from './Components/FileInput';
import Icon from './Components/Icon';

const DropZone = ({ disabled, onFilesAdded, setFiles }) => {
  const [highlight, setHighlight] = useState(false);
  const fileInputRef = React.createRef();

  const openFileDialog = () => {
    if (disabled) return;
    fileInputRef.current.click();
  };

  const handleChange = (event) => {
    if (disabled) return;
    const { files } = event.target;
    if (onFilesAdded) {
      const array = fileListToArray(files);
      onFilesAdded(array, setFiles);
    }
  };

  const onDragOver = (event) => {
    event.preventDefault();

    if (disabled) return;

    setHighlight(true);
  };

  const onDragLeave = () => {
    setHighlight(false);
  };

  const onDrop = (event) => {
    event.preventDefault();

    if (disabled) return;

    const { files } = event.dataTransfer;
    if (onFilesAdded) {
      const array = fileListToArray(files);
      onFilesAdded(array);
    }
    setHighlight(false);
  };

  return (
    <Container
      highlight={highlight}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onClick={openFileDialog}
      style={{ cursor: disabled ? 'default' : 'pointer' }}
    >
      <FileInput
        ref={fileInputRef}
        className="FileInput"
        type="file"
        multiple
        onChange={handleChange}
      />
      <Icon alt="upload" src={upload} />
      <span>Upload Files</span>
    </Container>
  );
};

DropZone.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onFilesAdded: PropTypes.func.isRequired,
  setFiles: PropTypes.func.isRequired,
};

export default DropZone;
