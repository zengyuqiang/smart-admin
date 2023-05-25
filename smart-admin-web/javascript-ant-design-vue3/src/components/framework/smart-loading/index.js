/*
 * loading 组件
 *
 * @Author: 曾
 * @Date:      2022-07-22 20:33:41
 * @Wechat:  
 * @Email: 739224682@qq.com
 * @Copyright: 
 */
import { useSpinStore } from "/@/store/modules/system/spin";

export const SmartLoading = {
  show: () => {
    useSpinStore().show();
  },

  hide: () => {
    useSpinStore().hide();
  },
};
