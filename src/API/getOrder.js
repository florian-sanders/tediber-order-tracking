import api from '.';

export default (param, callback) => {
  if (typeof Number(param) !== 'number') {
    callback('route param should be a number', null);
  } else {
    api.get(`/order/${param}`)
      .then((order) => {
        callback(null, order);
      })
      .catch((err) => {
        callback(err, null);
      });
  }
};
