/*
 * 数据变动
 *
 * @Author:    卓大
 * @Date:      2022-09-03 21:51:54
 * @Wechat:  
 * @Email: 739224682@qq.com
 * @Copyright: 
 */
import { postRequest } from '/@/lib/axios';

export const dataTracerApi = {
  // 分页查询业务操作日志 - @author 卓大
  queryList: (param) => {
    return postRequest('/support/dataTracer/query', param);
  },
  
};
