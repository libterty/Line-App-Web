import { postRequest } from './apiHelper';
import config from '../config';

class Request {
  postSignIn(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await postRequest(config.ROOT_URL+'/signin', data);
        resolve(
          res
        );
      } catch (error) {
        reject(error);
      }
    })
  }
}

export default Request;
