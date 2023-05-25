/*
 * cookie相关操作
 *
 * @Author: 曾
 * @Date:      2022-09-06 20:58:49
 * @Wechat:  
 * @Email: 739224682@qq.com
 * @Copyright: 
 */
import Cookies from 'js-cookie';

export const COOKIE_TOKEN_KEY = 'user_token';

export const clearAllCoolies = () => {
  Cookies.remove(COOKIE_TOKEN_KEY);
};

export const getTokenFromCookie = () => {
  return Cookies.get(COOKIE_TOKEN_KEY);
};

/**
 * 一年后cookie过期
 *
 * @param token
 */
export const saveTokenToCookie = (token) => {
  Cookies.set(COOKIE_TOKEN_KEY, token, { expires: 365 });
};
