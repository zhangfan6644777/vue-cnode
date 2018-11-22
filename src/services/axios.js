import axios from 'axios';
class Axios {
  async POST(url, params) {
    const res = await axios.post(url, params);
    if (res.status === 200) {
      return res.data;
    }
  }
  async GET(url, params) {
    console.log('params', params);
    const res = await axios.get(url, {params});
    console.log(res);
    if (res.status === 200) {
      return res.data;
    }
  }
}
export default new Axios();
