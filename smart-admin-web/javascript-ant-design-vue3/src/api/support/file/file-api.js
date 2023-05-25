/*
 * 文件上传
 *
 * @Author: 曾
 * @Date:      2022-09-03 21:55:25
 * @Wechat:  
 * @Email: 739224682@qq.com
 * @Copyright: 
 */
import { postRequest, getRequest, download } from '/@/lib/axios';

export const fileApi = {
  // 文件上传 @author 卓大
  uploadUrl: '/support/file/upload',
  uploadFile: (param, folder) => {
    return postRequest(`/support/file/upload?folder=${folder}`, param);
  },

  /**
   * 分页查询  @author 卓大
   */
  queryPage: (param) => {
    return postRequest('/support/file/queryPage', param);
  },
  /**
   * 获取文件URL：根据fileKey @author 胡克
   */
  getUrl: (fileKey) => {
    return getRequest(`/support/file/getFileUrl?fileKey=${fileKey}`);
  },

  /**
   * 下载文件流（根据fileKey） @author 胡克
   */
  downLoadFile: (fileName, fileKey) => {
    return download(fileName, '/support/file/downLoad', { fileKey });
  },
};
