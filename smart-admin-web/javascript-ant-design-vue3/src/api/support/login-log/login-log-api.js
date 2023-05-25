/*
 * 登录日志
 *
 * @Author: 曾
 * @Date:      2022-09-03 21:56:31
 * @Wechat:  
 * @Email: 739224682@qq.com
 * @Copyright: 
 */
import { postRequest, getRequest } from '/@/lib/axios';

export const loginLogApi = {
  // 分页查询 @author 卓大
  queryList: (param) => {
    return postRequest('/support/loginLog/page/query', param);
  },
};
