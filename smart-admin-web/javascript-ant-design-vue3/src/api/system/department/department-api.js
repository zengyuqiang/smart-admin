/*
 * 部门
 *
 * @Author: 曾
 * @Date:      2022-09-03 21:58:50
 * @Wechat:  
 * @Email: 739224682@qq.com
 * @Copyright: 
 */
import { getRequest, postRequest } from '/@/lib/axios';

export const departmentApi = {
  /**
   * @description: 查询部门列表 @author 卓大
   * @param {*}
   * @return {*}
   */
  queryAllDepartment: () => {
    return getRequest('/department/listAll');
  },

  /**
   * @description: 查询部门树形列表 @author 卓大
   * @param {*}
   * @return {*}
   */
   queryDepartmentTree: () => {
    return getRequest('/department/treeList');
  },

  /**
   * @description: 添加部门 @author 卓大
   * @param {*}
   * @return {*}
   */
  addDepartment: (param) => {
    return postRequest('/department/add', param);
  },
  /**
   * @description: 更新部门信息 @author 卓大
   * @param {*}
   * @return {*}
   */
  updateDepartment: (param) => {
    return postRequest('/department/update', param);
  },
  /**
   * @description: 获取校区列表 @author 卓大
   * @param {*}
   * @return {*}
   */
  deleteDepartment: (departmentId) => {
    return getRequest(`/department/delete/${departmentId}`);
  },
};
