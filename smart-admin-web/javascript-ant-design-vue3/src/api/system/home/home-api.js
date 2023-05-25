/*
 * 首页api
 *
 * @Author: 曾
 * @Date:      2022-09-03 21:59:39
 * @Wechat:  
 * @Email: 739224682@qq.com
 * @Copyright: 
 */
import { getRequest } from '/@/lib/axios';

export const homeApi = {
  /**
   * @description: 首页-金额统计（业绩、收款、订单数等） @author 卓大
   * @param {*}
   * @return {*}
   */
  homeAmountStatistics: () => {
    return getRequest('/home/amount/statistics');
  },
  /**
   * @description: 首页-待办信息 @author 卓大
   * @param {*}
   * @return {*}
   */
  homeWaitHandle: () => {
    return getRequest('home/wait/handle');
  },
};
