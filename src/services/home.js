import axios from './axios';
import {
  http_get_topicList
} from './url';
class Service {
  async getTopicList(params) {
    const url = http_get_topicList();
    const res = await axios.GET(url, params);
    console.log(res);
    return res;
  }
}
export default new Service();
