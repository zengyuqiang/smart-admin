/*
 * localStorage 相关操作
 *
 * @Author: 曾
 * @Date:      2022-09-06 20:58:49
 * @Wechat:  
 * @Email: 739224682@qq.com
 * @Copyright: 
 */
export const localSave = (key, value) => {
  localStorage.setItem(key, value);
};

export const localRead = (key) => {
  return localStorage.getItem(key) || '';
};

export const localClear = () => {
  localStorage.clear();
};
