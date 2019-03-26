const onFilesAdded = (newFiles, setFiles) => setFiles(prevFiles => prevFiles.concat(newFiles));

export default onFilesAdded;
