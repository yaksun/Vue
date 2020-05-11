/**
 * JIM-Web版本实体模型空间
 */
namespace JIM.Web.Model {
    /**
     * JIM消息实体模型
     */
    export class JIMMessage {
        /**
         * 消息id
         */
        public messageId!: string;

        /**
         * 发送人id
         */
        public senderUserId	!: string;

        /**
         * 接收人id
         */
        public targetId!: string;

        /**
         * 发送时间，JIM服务器时间
         */
        public sentTime!: Date;

        /**
         * 消息类型，各端可随意定制 
         *（原有类型字段，由于前期使用规范问题，后续仅作为业务类型标识使用）
         */
        public objectName!: string;

        /**
         * 消息类型(1为聊天消息，2为事件推送，3为精准推送)
         * 默认1聊天消息
         */
        public busType: BusType = BusType.Chat;

        /**
         * 消息小类(1为文本消息，2为语音消息，3为图片消息，4为视频消息)
         * 默认为文本消息
         */
        public msgType: MsgType = MsgType.TxtMsg;

        /**
         * 消息内容
         */
        public content!: any;

        /**
         * 是否群组消息
         * 为空或者为0时，非群组消息，为1时为群组消息
         * 默认0，非群组消息
         */
        public isGroupMsg: number = 0;

        /**
         * 发送群组id
         */
        public groupId!: string;
    }
}
