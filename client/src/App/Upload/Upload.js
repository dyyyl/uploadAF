import React, { useState } from 'react';

import check from '../../shared/svg/baseline-check-24px.svg';

import onFilesAdded from '../../shared/helpers/onFilesAdded';

import DropZone from './DropZone';
import Progress from './Progress';

import Actions from './Components/Actions';
import Button from './Components/Button';
import CheckIcon from './Components/CheckIcon';
import Container from './Components/Container';
import Content from './Components/Content';
import FileName from './Components/FileName';
import Files from './Components/Files';
import ProgressWrapper from './Components/ProgressWrapper';
import Row from './Components/Row';
import Title from './Components/Title';

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [success, setSuccess] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});

  const sendRequest = file => new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();

    req.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const copy = { ...uploadProgress };
        copy[file.name] = {
          state: 'pending',
          percentage: (event.loaded / event.total) * 100,
        };
        setUploadProgress(copy);
      }
    });

    req.upload.addEventListener('load', () => {
      const copy = { ...uploadProgress };
      copy[file.name] = { state: 'done', percentage: 100 };
      setUploadProgress(copy);
      resolve(req.response);
    });

    req.upload.addEventListener('error', () => {
      const copy = { ...uploadProgress };
      copy[file.name] = { state: 'error', percentage: 0 };
      setUploadProgress(copy);
      reject(req.response);
    });

    const formData = new FormData();
    formData.append('file', file, file.name);

    req.open('POST', 'https://server-fk0w7qheo.now.sh/upload');
    req.send(formData);
  });

  const uploadFiles = async () => {
    setUploadProgress({});
    setUploading(true);

    const promises = [];
    files.forEach((file) => {
      promises.push(sendRequest(file));
    });

    files.reduce((acc, cur) => acc.concat(cur), []);

    try {
      await Promise.all(promises);
      setSuccess(true);
      setUploading(false);
    } catch (error) {
      // Not Production ready! Do some error handling here instead...
      setSuccess(true);
      setUploading(false);
    }
  };

  const renderActions = () => {
    if (success) {
      return (
        <Button
          type="button"
          onClick={() => {
            setFiles([]);
            setSuccess(false);
          }}
        >
          Clear
        </Button>
      );
    }
    return (
      <Button type="button" disabled={files.length < 0 || uploading} onClick={uploadFiles}>
        UPLOAD
      </Button>
    );
  };

  const renderProgress = (file) => {
    const progress = uploadProgress[file.name];

    if (uploading || success) {
      return (
        <ProgressWrapper>
          <Progress progress={progress ? progress.percentage : 0} />
          <CheckIcon
            alt="done"
            src={check}
            style={{
              opacity: progress && progress.state === 'done' ? 0.5 : 0,
              color: 'limegreen',
            }}
          />
        </ProgressWrapper>
      );
    }
    return null;
  };

  return (
    <Container>
      <Title>Upload Files</Title>
      <Content>
        <div>
          <DropZone
            onFilesAdded={onFilesAdded}
            setFiles={setFiles}
            disabled={uploading || success}
          />
        </div>
        <Files>
          {files.map(file => (
            <Row key={file.name}>
              <FileName>{file.name}</FileName>
              {renderProgress(file)}
            </Row>
          ))}
        </Files>
      </Content>
      <Actions>{renderActions()}</Actions>
    </Container>
  );
};

export default Upload;
