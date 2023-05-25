/*
 * 意见反馈
 *
 * @Author:    1024创新实验室：开云
 * @Date:      2022-09-03 21:56:31
 * @Wechat:  
 * @Email: 739224682@qq.com
 * @Copyright: 
 */
import { postRequest } from '/@/lib/axios';

export const feedbackApi = {
  // 意见反馈-新增
  addFeedback: (params) => {
    return postRequest('/support/feedback/add', params);
  },
  // 意见反馈-分页查询
  queryFeedback: (params) => {
    return postRequest('/support/feedback/query', params);
  },
  // 意见反馈更新
  feedbackUpdate: (params) => {
    return postRequest('/support/feedback/update', params);
  },
};
