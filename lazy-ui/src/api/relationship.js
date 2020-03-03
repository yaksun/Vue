import request from '@/utils/request'

export function fetchRList(query) {
  return request({
    url: '/relationship/list',
    method: 'get',
    params: { query }
  })
}

export function fetchRelationship(id) {
  return request({
    url: '/relationship/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/relationship/pv',
    method: 'get',
    params: { pv }
  })
}

export function createRelationship(data) {
  return request({
    url: '/relationship/create',
    method: 'post',
    data
  })
}

export function apiUpdateRelationship(data) {
  return request({
    url: '/relationship/save',
    method: 'post',
    data
  })
}

export function apiDeleteAllFields(entityId) {
  // console.log(entityId);
  // debugger;
  return request({
    url: '/api/field/deleteFieldsByEntityId',
    method: 'get',
    params: { entityId }
  })
}

export function apiGetFieldSelect(data) {
  // console.log(entityId);
  // debugger;
  return request({
    url: '/api/field/getFieldSelect',
    method: 'post',
    data
  })
}
