import { base_model } from "@/model/base_model";
import { base_loading_model } from '../base_loading_model';
import { base_page_model } from '../base_page_model';

/***【入参】请求入参modeladdresses**/
class addresses_ui_model extends base_loading_model {
    public constructor() { super(); }
    public addresses!: [];
}
class addresses_par_model extends addresses_ui_model {
    public constructor() { super(); }
}

/***【输出】输出结果modelOK**/
class resultBean_result_model extends base_model {
    public constructor() { super(); }

    /*** 明细数据**/
    public data!: resultBean_result_model_detail[];
}
/***【输出】带分页的结果modelOK**/
class resultBean_page_reult_model extends base_page_model<resultBean_result_model_detail> {
    public constructor() { super(); }

}
/***【输出】明细数据modelOK**/
class resultBean_result_model_detail {
    public constructor() { }

    public resultBean!: any;

}

class resultBean_par_model {

}
/***【输入】uiModel界面数据绑定OK**/
class resultBean_ui_model extends resultBean_par_model {
    public constructor() { super(); }

}

/***【入参】请求入参modelrequestArriveInfo**/
class requestArriveInfo_ui_model extends base_loading_model {
    public constructor() { super(); }

    /***目的地经纬度经度，必填项***/
    public destination!: destination_child_result_model_detail;

    /***传入经纬度类型，0：GCJ02(高德坐标系),1:wgs84（公安网坐标系）。默认1***/
    public gpsType!: number;

    /***出发点经纬度***/
    public origin!: destination_child_result_model_detail;

    /***路线选择策略，仅驾车可选。默认为0：不考虑路况返回耗时最短路线***/
    public strategy!: string;

    /***调用类型 1：驾车，2：步行，3：骑车。默认驾车1***/
    public type!: string;

}

class requestArriveInfo_par_model extends requestArriveInfo_ui_model{
    public constructor() { super(); }
}



/***【输出】明细数据model目的地经纬度经度，必填项**/
class destination_child_result_model_detail {
    public constructor() { }

    /******/
    public latitude!: any;

    /******/
    public lonLatString!: string;

    /******/
    public longitude!: any;

}

/***【输出】输出结果modelOK**/
class pathPlan_result_model extends base_model {
    public constructor() { super(); }

    /*** 明细数据**/
    public data!: pathPlan_result_model_detail[];
}
/***【输出】带分页的结果modelOK**/
class pathPlan_page_reult_model extends base_page_model<pathPlan_result_model_detail> {
    public constructor() { super(); }

}
class pathPlan_result_model_detail {

}

class pathPlan_par_model {

}
/***【输入】uiModel界面数据绑定OK**/
class pathPlan_ui_model extends pathPlan_par_model {
    public constructor() { super(); }

}
/***【入参】请求入参modelcondition**/
class condition_ui_model extends base_loading_model {
    public constructor() { super(); }

    /***选填,查询城市。可选值：城市中文、中文全拼、citycode、adcode***/
    public cityName!: string;

    /***选填,仅返回指定城市数据,可选值：0(true)/1(false),默认0,选其他默认0***/
    public citylimit!: number;

    /***选填,默认poi,多种数据类型用“|”分隔，可选值：all-返回所有数据类型、poi-返回POI数据类型、bus-返回公交站点数据类型、busline-返回公交线路数据类型***/
    public datatype!: string;

    /***关键字,必填***/
    public keyWords!: string;

    /***选填,经度/纬度,可在此location附近优先返回搜索关键词信息***/
    public origin!: origin_child_result_model_detail;

}

class condition_par_model extends condition_ui_model{
    public constructor() { super(); }
}



/***【输出】明细数据model选填,经度/纬度,可在此location附近优先返回搜索关键词信息**/
class origin_child_result_model_detail {
    public constructor() { }

    /******/
    public latitude!: any;

    /******/
    public lonLatString!: string;

    /******/
    public longitude!: any;

}




/***【输出】输出结果modelOK**/
class poiSearchResult_result_model extends base_model {
    public constructor() { super(); }

    /*** 明细数据**/
    public data!: poiSearchResult_result_model_detail[];
}
/***【输出】带分页的结果modelOK**/
class poiSearchResult_page_reult_model extends base_page_model<poiSearchResult_result_model_detail> {
    public constructor() { super(); }

}
/***【输出】明细数据modelOK**/
class poiSearchResult_result_model_detail {
    public constructor() { }

    /******/
    public currentpage!: number;

    /******/
    public firstResult!: number;

    /******/
    public maxresult!: number;

    /******/
    public pagecode!: number;

    /******/
    public records!: records_child_result_model_detail[];

    /******/
    public time!: number;

    /******/
    public totalpage!: number;

    /******/
    public totalrecord!: number;

}



/***【输出】明细数据model**/
class records_child_result_model_detail {
    public constructor() { }

    /******/
    public guid!: string;

    /******/
    public poi_code!: string;

    /******/
    public poi_dz!: string;

    /******/
    public poi_fldm!: string;

    /******/
    public poi_mc!: string;

    /******/
    public poi_type!: string;

    /******/
    public poi_x!: string;

    /******/
    public poi_y!: string;

}

class poiSearchResult_par_model {

}
/***【输入】uiModel界面数据绑定OK**/
class poiSearchResult_ui_model extends poiSearchResult_par_model {
    public constructor() { super(); }

}
/***【入参】请求入参modelpts**/
class pts_ui_model extends base_loading_model {
    public constructor() { super(); }

    public pts!: [];

}
class pts_par_model extends pts_ui_model{
    public constructor() { super(); }
}

export {
    addresses_ui_model,
    addresses_par_model,
    resultBean_result_model,
    resultBean_page_reult_model,
    resultBean_result_model_detail,
    resultBean_ui_model,
    destination_child_result_model_detail,
    requestArriveInfo_ui_model,
    requestArriveInfo_par_model,
    pathPlan_result_model_detail,
    pathPlan_page_reult_model,
    pathPlan_ui_model,
    origin_child_result_model_detail,
    condition_ui_model,
    condition_par_model,
    poiSearchResult_result_model,
    poiSearchResult_page_reult_model,
    records_child_result_model_detail,
    poiSearchResult_result_model_detail,
    poiSearchResult_ui_model,
    pts_par_model,
    pts_ui_model,
};
