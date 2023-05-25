/*
 * 缓存
 *
 * @Author:    罗伊
 * @Date:      2022-09-03 21:51:34
 * @Wechat:  
 * @Email: 739224682@qq.com
 * @Copyright: 
 */
import { postRequest, getRequest } from '/@/lib/axios';

export const cacheApi = {
  // 获取某个缓存的所有key @author 罗伊
  getKeys: (cacheName) => {
    return getRequest(`/support/cache/keys/${cacheName}`);
  },
  // 移除某个缓存 @author 罗伊
  remove: (cacheName) => {
    return getRequest(`/support/cache/remove/${cacheName}`);
  },
  // 获取所有缓存 @author 罗伊
  getAllCacheNames: () => {
    return getRequest('/support/cache/names');
  },
};
