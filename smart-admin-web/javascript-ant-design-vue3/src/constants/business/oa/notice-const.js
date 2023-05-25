/*
 * 通知
 *
 * @Author: 曾
 * @Date:      2022-09-03 22:07:27
 * @Wechat:  
 * @Email: 739224682@qq.com
 * @Copyright: 
 */

export const NOTICE_VISIBLE_RANGE_DATA_TYPE_ENUM = {
  EMPLOYEE: {
    value: 1,
    desc: '员工',
  },
  DEPARTMENT: {
    value: 2,
    desc: '部门',
  },
};

export const NOTICE_TYPE_ENUM = {
  ANNOUNCEMENT: {
    value: 1,
    desc: 'お知らせ',
  },
  NOTICE: {
    value: 2,
    desc: '通知',
  },
};

export default {
  NOTICE_VISIBLE_RANGE_DATA_TYPE_ENUM,
  NOTICE_TYPE_ENUM,
};
