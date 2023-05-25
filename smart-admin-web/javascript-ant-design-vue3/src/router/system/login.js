/*
 * 登录页面
 *
 * @Author: 曾
 * @Date:      2022-09-06 20:51:50
 * @Wechat:  
 * @Email: 739224682@qq.com
 * @Copyright: 
 */

export const loginRouters = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('/@/views/system/login/login.vue'),
    meta: {
      title: '登录',
      hideInMenu: true,
    },
  },
];
