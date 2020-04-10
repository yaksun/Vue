import { JPConfig } from '@/config/JPConfig';

/**
 * admin接口
 */
const adminAPIs = {
  /**
   * 功能
   */
  adminLogin_modules: {
    /**
     * 方法
     */
    jp_adminLogin_getAdminData_api: {
      url:  "/jp-community-admin-ms/api/menus/build",
      method: "put",
      baseUrl:"jpHttpUrl"
    },
    
  },

  /**
    * 获取菜单
    */
  jp_community_menus_api: {
    url:   "/jp-community-admin-ms/api/menus/build",
    method: "get",
    baseUrl:"jpHttpUrl"
  }
}

export { adminAPIs };