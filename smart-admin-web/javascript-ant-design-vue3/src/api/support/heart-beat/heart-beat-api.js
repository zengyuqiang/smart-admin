/*
 * 心跳
 *
 * @Author: 曾
 * @Date:      2022-09-03 21:55:47
 * @Wechat:  
 * @Email: 739224682@qq.com
 * @Copyright: 
 */
import { postRequest } from '/@/lib/axios';

export const heartBeatApi = {
  // 分页查询 @author 卓大
  queryList: (param) => {
    return postRequest('/support/heartBeat/query', param);
  },
};
