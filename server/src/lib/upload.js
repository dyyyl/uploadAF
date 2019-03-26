import formidable from 'formidable';

const upload = (req, res) => {
  const form = new formidable.IncomingForm();

  form.on('file', (field, file) =>
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
    console.log(`Uploaded ${field}: ${file.name}`),
  );

  form.on('end', () => {
    res.json();
  });

  form.parse(req);
};

export default upload;
