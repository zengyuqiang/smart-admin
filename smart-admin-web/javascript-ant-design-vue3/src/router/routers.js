/*
 * 所有路由入口
 *
 * @Author: 曾
 * @Date:      2022-09-06 20:52:26
 * @Wechat:  
 * @Email: 739224682@qq.com
 * @Copyright: 
 */
import { homeRouters } from './system/home';
import { loginRouters } from './system/login';
import { helpDocRouters } from './support/help-doc';

export const routerArray = [...loginRouters, ...homeRouters, ...helpDocRouters];
