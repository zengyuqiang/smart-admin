/*
 * 错误上报sentry
 *
 * @Author: 曾
 * @Date:      2022-09-06 20:49:28
 * @Wechat:  
 * @Email: 739224682@qq.com
 * @Copyright: 
 */

export const smartSentry = {
  /**
   * sentry 主动上报
   */
  captureError: (error) => {
    if (error.config && error.data && error && error.headers && error.request && error.status) {
      return;
    }
    // Sentry.captureException(error);
    console.error(error);
  },
};
