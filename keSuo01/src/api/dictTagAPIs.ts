import { JPConfig } from '@/config/JPConfig';

const dictTagAPIs = {
  /**
  *查询标签树（type和key）
  */
  jp_tag_tree_type_api:{
    url: "/api/jp-HCZZ-AdminWeb-app-ms/tag/tree/detail",
    method: "get"
  },
}

export { dictTagAPIs }