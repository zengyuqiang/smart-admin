/*
 *  登录
 *
 * @Author: 曾
 * @Date:      2022-09-03 21:59:58
 * @Wechat:  
 * @Email: 739224682@qq.com
 * @Copyright: 
 */
import { getRequest, postRequest } from '/@/lib/axios';

export const loginApi = {
  /**
   * 登录 @author 卓大
   * @param param
   */
  login: (param) => {
    return postRequest('/login', param);
  },

  /**
   * 退出登录 @author 卓大
   * @param param
   */
  logout: () => {
    return getRequest('/login/logout');
  },

  /**
   * 获取验证码 @author 卓大
   * @param param
   */
  getCaptcha: () => {
    return getRequest('/login/getCaptcha');
  },

  /**
   * 获取登录信息 @author 卓大
   * @param param
   */
  getLoginInfo: () => {
    return getRequest('/login/getLoginInfo');
  },

  /**
   * 刷新用户信息（包含用户基础信息、权限信息等等）   @author 卓大
   */
  refresh: () => {
    return getRequest('/login/refresh');
  },
};
