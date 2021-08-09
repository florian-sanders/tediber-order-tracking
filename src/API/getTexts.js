import api from '.';

export default (callback) => {
  api.get('/texts')
    .then((texts) => {
      callback(null, texts);
    })
    .catch((err) => {
      callback(err, null);
    });
};
