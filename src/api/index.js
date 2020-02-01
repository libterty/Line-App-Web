import { getRequest, getAuthRequest, postRequest, postAuthRequest, putAuthRequest, deleteRequest } from './apiHelper';
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

  getLogout() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await getAuthRequest(config.ROOT_URL+'/signout');
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

  postNewShop(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await postAuthRequest(config.ROOT_URL+'/shops/create', data);
        resolve(
          res
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  putShop(id, data) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await putAuthRequest(config.ROOT_URL+`/shops/edit/${id}`, data);
        resolve(
          res
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  deleteShop(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await deleteRequest(config.ROOT_URL+`/shops/delete/${id}`);
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
