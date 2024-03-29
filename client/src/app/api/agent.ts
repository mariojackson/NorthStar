import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { history } from '../../index';

axios.defaults.baseURL = 'http://localhost:5000/api/';
axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(response => {
  return response; 
}, (error: AxiosError) => {
  const { data, status } = error.response!;
  
  switch(status) {
    case 400:
      if (data.errors) {
        const modelStateErrors: string[] = [];
        
        for (const key in data.errors) {
          if (data.errors[key]) {
            modelStateErrors.push(data.errors[key]);
          }
        }
        
        throw modelStateErrors.flat();
      }
      toast.error(data.title);
      break;
    case 401:
      toast.error(data.title);
      break;
    case 500:
      history.push({
        pathname: '/server-error',
        state: { error: data }
      });
      break;
    default:
      break;
  }
  
  return Promise.reject(error.response);
});

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody)
}

const Catalog = {
  list: () => requests.get('products'),
  details: (id: number) => requests.get(`products/${id}`)
}

const Basket = {
  get: () => requests.get('basket'),
  addItem: (productId: number, quantity = 1) => requests.post(`basket?productId=${productId}&quantity=${quantity}`, {}),
  removeItem: (productId: number, quantity = 1) => requests.delete(`basket?productId=${productId}&quantity=${quantity}`),
}

const TestErrors = {
  get400Error: () => requests.get('buggytest/bad-request'),
  get401Error: () => requests.get('buggytest/unauthorized'),
  get404Error: () => requests.get('buggytest/not-found'),
  get500Error: () => requests.get('buggytest/server-error'),
  getValidationError: () => requests.get('buggytest/validation-error')
}

const agent = {
  Catalog,
  TestErrors,
  Basket
}

export default agent;