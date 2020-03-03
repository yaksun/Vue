import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/entity/page',
    method: 'get',
    params: query
  })
}

export function fetchEntity(id) {
  return request({
    url: '/entity/getWithPF',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/entity/pv',
    method: 'get',
    params: { pv }
  })
}

export function createEntity(data) {
  return request({
    url: '/entity/create',
    method: 'post',
    data
  })
}

export function updateEntity(data) {
  return request({
    url: '/entity/update',
    method: 'post',
    data
  })
}

export function apiDeleteEntity(entityId) {
  return request({
    url: '/api/entity/delete/' + entityId,
    method: 'get'
  })
}

/** **** 接下里是下拉列表 *******/

export function getRemoteSolution(projectId) {
  return request({
    url: '/api/entity/getRemoteSolution',
    method: 'get',
    params: { projectId }
  })
}
export function getRemoteMappingTypeDict(projectId) {
  return request({
    url: '/api/entity/getRemoteSolution',
    method: 'get',
    params: { projectId }
  })
}
export function getRemoteJdbcTypeDict(projectId) {
  return request({
    url: '/api/entity/getRemoteJdbcTypeDict',
    method: 'get',
    params: { projectId }
  })
}
export function getRemoteTypeFmtDict(projectId) {
  return request({
    url: '/api/entity/getRemoteTypeFmtDict',
    method: 'get',
    params: { projectId }
  })
}
export function getRemoteFormTypeDict(projectId) {
  return request({
    url: '/api/entity/getRemoteFormTypeDict',
    method: 'get',
    params: { projectId }
  })
}
export function getRemoteQueryTypeDict(projectId) {
  return request({
    url: '/api/entity/getRemoteQueryTypeDict',
    method: 'get',
    params: { projectId }
  })
}

export function apiGetEntitySelect(data) {
  return request({
    url: '/api/entity/getEntitySelect',
    // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    method: 'post',
    data
  })
}
export function apiDeleteByIds(ids) {
  return request({
    url: '/api/entity/deleteByIds',
    // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    method: 'get',
      params: { ids }
  })
}

