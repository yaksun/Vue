/**
 * JIM-Web版本实体模型空间
 */
namespace JIM.Web.Model {
    /**
     * 心跳监测命令模型
     */
    export class AckCommandModel {
        /**
         * 命令
         */
        public command!: number;

        /**
         * 数据
         */
        public data!: any;
    }
}