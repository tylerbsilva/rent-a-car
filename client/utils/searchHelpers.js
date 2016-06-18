import axios from 'axios';

let helpers = {
  getRentals(data){
    data.apiKey = 'kn6d52f66n2bnsydn43wq6y7';
    data.format = 'JSON';
    console.log(data);
    return axios({
      method: 'get',
      url: 'http://api.hotwire.com/v1/search/car',
      params: {
        ...data
      },
      contentType: 'text/plain'
    })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  }
}

export default helpers;
