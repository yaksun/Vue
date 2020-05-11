/**
 * JIM-Web版本实体模型空间
 */
namespace JIM.Web.Model {
    /**
     * 消息内容类型
     */
    export enum MsgType {
        /**
         * 文本消息=1
         */
        TxtMsg = 1,

        /**
         * 语音消息=2
         */
        VoiceMsg = 2,

        /**
         * 图片消息=3
         */
        ImgMsg = 3,

        /**
         * 视频消息=4
         */
        VideoMsg = 4
    }
}