/*
 * 操作日志
 *
 * @Author: 曾
 * @Date:      2022-09-03 21:56:45
 * @Wechat:  
 * @Email: 739224682@qq.com
 * @Copyright: 
 */
import { postRequest, getRequest } from '/@/lib/axios';

export const operateLogApi = {
  // 分页查询 @author 卓大
  queryList: (param) => {
    return postRequest('/support/operateLog/page/query', param);
  },
  // 详情 @author 卓大
  detail: (id) => {
    return getRequest(`/support/operateLog/detail/${id}`);
  },
};
