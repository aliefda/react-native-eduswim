/* global fetch:false */
import storage from '../utils/storage';
import { STORAGE_KEY } from '../constants';

export const config = {
  baseUrl: 'ec2-54-164-167-154.compute-1.amazonaws.com/api'
};

export const STATUS_CODE = {
  OK: 200,
  NOT_FOUND: 404,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401
};

const fetchData = async (url, params, customHeaders) => {
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...customHeaders
  };

  const token = await storage.get(STORAGE_KEY.TOKEN_LOGIN);
  if (token.length >= 100) {
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`
    };
  } else {
    headers = {
      ...headers
    };
  }

  const response = await fetch(url, {
    ...params,
    headers
  });
  // for DELETE method case
  if (response.status === STATUS_CODE.NO_CONTENT) return {};
  const json = await response.json();
  // if (!response.ok) {
  //   if (json && json.message) {
  //     if (json.data) {
  //       const error = new Error(json.message);
  //       error.code = json.data.errorCode;
  //       throw error;
  //     } else {
  //       throw new Error(json.message);
  //     }
  //   }
  //   throw new Error('unknownError');
  // }
  return json;
};

const get = async (endpoint, params = {}, headers = {}) => {
  let queryString = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');
  if (queryString.length > 0) {
    queryString = `?${queryString}`;
  }
  const url = `${config.baseUrl}${endpoint}${queryString}`;
  const fetchParams = {
    method: 'GET'
  };
  return fetchData(url, fetchParams, headers);
};

const post = async (endpoint, params = {}, headers = {}) => {
  const url = `${config.baseUrl}${endpoint}`;
  const fetchParams = {
    method: 'POST',
    body: JSON.stringify(params)
  };
  return fetchData(url, fetchParams, headers);
};

const patch = async (endpoint, params = {}, headers = {}) => {
  const url = `${config.baseUrl}${endpoint}`;
  const fetchParams = {
    method: 'PATCH',
    body: JSON.stringify(params)
  };
  return fetchData(url, fetchParams, headers);
};

const put = async (endpoint, params = {}, headers = {}) => {
  const url = `${config.baseUrl}${endpoint}`;
  const fetchParams = {
    method: 'PUT',
    body: JSON.stringify(params)
  };
  return fetchData(url, fetchParams, headers);
};

const remove = async (endpoint, headers = {}) => {
  const url = `${config.baseUrl}${endpoint}`;
  const fetchParams = {
    method: 'DELETE'
  };
  return fetchData(url, fetchParams, headers);
};

export { get, post, put, patch, remove };
