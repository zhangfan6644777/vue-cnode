import axios from './axios';
import {
  http_get_topicList
} from './url';
class Service {
  async getTopicList(params) {
    const res = await axios.GET(http_get_topicList, params);
    console.log(res);
    return res;
  }
}
export default new Service();
