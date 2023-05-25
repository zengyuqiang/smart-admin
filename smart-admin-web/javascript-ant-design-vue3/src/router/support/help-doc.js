/*
 * 帮助文档
 *
 * @Author: 曾
 * @Date:      2022-09-06 20:53:19
 * @Wechat:  
 * @Email: 739224682@qq.com
 * @Copyright: 
 */
import SmartHelpDocLayout from '/@/layout/smart-help-doc-layout.vue';

export const helpDocRouters = [
  {
    path: '/help-doc',
    name: 'HelpDoc',
    component: SmartHelpDocLayout,
    meta: {
      title: '帮助文档',
      hideInMenu: true,
    },
    children: [
      {
        path: '/help-doc/detail',
        component: () => import('/@/views/support/help-doc/user-view/help-doc-user-view.vue'),
      },
    ],
  },
];
