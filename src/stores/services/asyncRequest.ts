import axios from 'axios';
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default function asyncRequest(endPoint: string): Promise<object> {
  return new Promise<object>((resolve: (value?: any) => any, reject: (reason?: any) => any) => {
    axios
      .get(endPoint, {})
      .then(
        (res: any): Promise<object> => {
          console.log(res);
          return resolve(res);
        }
      )
      .catch((err: any): Promise<object> => reject(err));
  });
}
