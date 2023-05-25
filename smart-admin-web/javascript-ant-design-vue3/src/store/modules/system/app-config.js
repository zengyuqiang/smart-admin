/*
 * 项目的配置信息
 *
 * @Author: 曾
 * @Date:      2022-09-06 20:53:47
 * @Wechat:  
 * @Email: 739224682@qq.com
 * @Copyright: 
 */
import { defineStore } from 'pinia';
import { appDefaultConfig } from '/@/config/app-config';
import localStorageKeyConst from '/@/constants/local-storage-key-const';
import { smartSentry } from '/@/lib/smart-sentry';
import { localRead } from '/@/utils/local-util';

let state = { ...appDefaultConfig };

let appConfigStr = localRead(localStorageKeyConst.APP_CONFIG);
let language = appDefaultConfig.language;
if (appConfigStr) {
  try {
    state = JSON.parse(appConfigStr);
    language = state.language;
  } catch (e) {
    smartSentry.captureError(e);
  }
}

/**
 * 获取初始化的语言
 */
export const getInitializedLanguage = function () {
  return language;
};

export const useAppConfigStore = defineStore({
  id: 'appConfig',
  state: () => ({
    // 读取config下的默认配置
    ...state,
  }),
  actions: {
    reset() {
      for (const k in appDefaultConfig) {
        this[k] = appDefaultConfig[k];
      }
    },
    showHelpDoc() {
      this.helpDocFlag = true;
    },
    hideHelpDoc() {
      this.helpDocFlag = false;
    },
  },
});
