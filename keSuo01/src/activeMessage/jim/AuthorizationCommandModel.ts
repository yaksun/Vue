/**
 * JIM-Web版本实体模型空间
 */
namespace JIM.Web.Model {

    /**
     * 鉴权命令模型
     */
    export class AuthorizationCommandModel extends AckCommandModel {
        /**
         * 返回消息编码
         */
        public code!: string | number;

        /**
         * 返回提示消息
         */
        public msg!: string;
    }
}