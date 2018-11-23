import axios from './axios';
import {
  http_get_topicDetails
} from './url';
class Service {
  async getTopicDetail(id) {
    const url = http_get_topicDetails(id);
    const res = await axios.GET(url);
    console.log(res);
    return res;
  }
}
export default new Service();
