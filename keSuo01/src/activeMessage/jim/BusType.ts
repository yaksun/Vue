/**
 * JIM-Web版本实体模型空间
 */
namespace JIM.Web.Model {
    /**
     * 消息类型
     */
    export enum BusType {
        /**
         * 1为聊天消息 
         * Chat: 消息类型：聊天消息, （如TxtMsg为文字消息，VoiceMsg为语音消息）
         */
        Chat = 1,

        /**
         * 2为事件推送
         * Event: 事件名称：事件消息（如event_instructReply为指令回复消息）
         */
        Event = 2,

        /**
         * 3为精准推送
         * Push: 类型名称：精准推送类型（如wpf中的Map为点位精准推送）
         */
        Push = 3,

        /**
         * 默认无业务标识
         */
        None = -1
    }
}