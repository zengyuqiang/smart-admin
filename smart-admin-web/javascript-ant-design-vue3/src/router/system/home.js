/*
 * ホームページ路由
 *
 * @Author: 曾
 * @Date:      2022-09-06 20:51:41
 * @Wechat:  
 * @Email: 739224682@qq.com
 * @Copyright: 
 */
import { HOME_PAGE_NAME } from '/@/constants/system/home-const';
import { MENU_TYPE_ENUM } from '/@/constants/system/menu-const';
import SmartLayout from '/@/layout/smart-layout.vue';

export const homeRouters = [
  {
    path: '/',
    name: '_home',
    redirect: { name: HOME_PAGE_NAME },
    component: SmartLayout,
    meta: {
      title: 'ホームページ',
      menuType: MENU_TYPE_ENUM.CATALOG.value,
      icon: 'HomeOutlined',
    },
    children: [
      {
        path: '/home',
        name: HOME_PAGE_NAME,
        meta: {
          title: 'ホームページ',
          menuType: MENU_TYPE_ENUM.MENU.value,
          icon: 'HomeOutlined',
          parentMenuList: [{ name: '_home', title: 'ホームページ' }],
        },
        component: () => import('/@/views/system/home/index.vue'),
      },
    ],
  },
];
