import { base_model } from "@/model/base_model";
import { base_loading_model } from '../base_loading_model';
import { base_page_model } from '../base_page_model';



/***【输出】输出结果modelOK**/
class reverseGeocodingInfoModel_result_model extends base_model {
    public constructor() { super(); }

    /*** 明细数据**/
    public data!: reverseGeocodingInfoModel_result_model_detail[];
}
/***【输出】带分页的结果modelOK**/
class reverseGeocodingInfoModel_page_reult_model extends base_page_model<reverseGeocodingInfoModel_result_model_detail> {
    public constructor() { super(); }

}
/***【输出】明细数据modelOK**/
class reverseGeocodingInfoModel_result_model_detail {
    public constructor() { }

    /***纬度***/
    public latitude!: any;

    /***经度***/
    public longitude!: any;

    /***管理辖区编码***/
    public politicalCode!: string;

    /***管理辖区名称***/
    public politicalName!: string;

    /***行政区划编码***/
    public regionCode!: string;

    /***行政区划名称***/
    public regionName!: string;

    /***标准地址名称***/
    public standardAddressName!: string;

}

class reverseGeocodingInfoModel_par_model {

}
/***【输入】uiModel界面数据绑定OK**/
class reverseGeocodingInfoModel_ui_model extends reverseGeocodingInfoModel_par_model {
    public constructor() { super(); }

}

class gps_ui_model extends base_loading_model {
    public KeyWords!: string;
    public CurrentPageNum!: string;
    public PageSize!: string;
}
/**
 * @description: 地址查詢坐標
 * @param {type} 
 * @return: 
 */
class gps_result_model extends base_model{
    public data!: gps_result_model_detail[];
}
class  gps_result_model_detail{
    public poi_mc!: string;
    public poi_dz!: string;
    public guid!: string;
    public poi_fldm!: string;
    public poi_y!: string;
    public poi_x!: string;
    public poi_type!: string;
    public poi_code!: string;
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
export {
    reverseGeocodingInfoModel_result_model,
    reverseGeocodingInfoModel_page_reult_model,
    reverseGeocodingInfoModel_result_model_detail,
    reverseGeocodingInfoModel_ui_model,
    resultBean_result_model,
    resultBean_page_reult_model,
    resultBean_result_model_detail,
    resultBean_ui_model,
    gps_ui_model,
    gps_result_model,
    gps_result_model_detail
};
