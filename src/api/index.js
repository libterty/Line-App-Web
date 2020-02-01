import { getRequest, getAuthRequest, postRequest } from './apiHelper';
import config from '../config';

class Request {
  postSignIn(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await postRequest(config.ROOT_URL+'/admin/signin', data);
        resolve(
          res
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  userInfo() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await getRequest(config.ROOT_URL+'/get_current_user');
        resolve(
          res
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  getShopsInfo() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await getAuthRequest(config.ROOT_URL+'/shops');
        resolve(
          res
        );
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default Request;
