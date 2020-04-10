/**
 * JIM-Web版本实体模型空间
 */
namespace JIM.Web.Model {
     /**
      * 用户登录实体
      */
    export class LoginModel {
        /**
         * 用户登录名
         */
        public loginName!: string;

        /**
         * 密码
         */
        public passWord!: string;
    }
}