//import { areaList_model_detail } from "@/model/behaviorAnalysis/integralRule_result_model";

export default {
  /**
   * 全局http请求token
   */
  token: "",

  /**
   * 登录后用户信息
   */
  userinfo: null,

  /**
   * 权限菜单
   */
  permissionMenu: null,

  /**
   * 初始化socket.io默认生成的客户端唯一guid
   */
  socketioClientId: "",

  /**
   * 后台配置读取 key value
   */
  environmentKey: 'jp_instruct_web',
  instructEnvironment: 'H5_config',

  /**
   * 后台配置项
   */
  videoServerId: '',
  videoUrl: '',
  signalrUrl: '',
  checkInfo: '',
  mapSomeUrl: '', // ArcGis地图API请求dojo和css使用
  mapServer: '', // 地图底图地址，用来展示底图数据
  /** end */

  /*
   * 系统时间
   * 当前所在地址 用于天气获取
   */
  systemTime: '',
  cityName: 'wuhan',

  /**
   * 警情回告获取下拉 select 数据
   */
  caseSource: '', // 案件来源
  caseDatas: '', // 案件类型 案件性质 性质分类
  casePositionDatas: '', // 案件发案部位
  dutyZone: '', // 责任区域
  currentPoliceList: '', // 值班领导  回告人员 处警人员 当前人所在的警察列表（userId)

    /**signalr 连接状态**/
  signalrStatus:false,
  connectionState:5, /**signal连接状态，默认未连接**/
  instructLists:[],/**当前页面的所有指令**/
  /** 指令列表当前数据 */
  currentInsInfo: '',
  /**
   * 是否有新任务
   */
  isNewTask: false,
    // 任务列表信息
    taskListInfo:{},
    positionInfo:{},
  /**taskId 如果没有选中，默认插回来的数据第一条**/
  taskInfo:{},
  taskId:'',
  sensitiveWords:{},
  /**signalr推送过来的消息，查收**/
  signalrMsg:[],
  /** signalr事件
   * 全局边界存储处
   */

   /** 新增警情信息 */
   addAlarmInsInfo: '',


    /** 当前选取的受理单位信息 */
    responsePosition:{},

   /**联动责任区域*/
    dutyArea:[],

    /**联动处警人员*/
    policeList:[]

   /** end */
};
