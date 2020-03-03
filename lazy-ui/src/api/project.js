import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/project/page',
    method: 'get',
    params: query
  })
}

export function fetchProject(id) {
  return request({
    url: '/api/project/get',
    method: 'get',
    params: { id }
  })
}

export function deleteProject(id) {
  return request({
    url: '/api/project/delete',
    method: 'get',
    params: { id }
  })
}

export function createProject(data) {
  return request({
    url: '/project/save',
    method: 'post',
    data
  })
}

export function listDb() {
  return request({
    url: '/api/project/listDb',
    method: 'post'
  })
}
export function updateProject(data) {
  return request({
    url: '/project/update',
    method: 'post',
    params: { data }
  })
}
export function getPathByOsType() {
  return request({
    url: '/api/getPathByOsType'
  })
}

export function apiGenerateProject(id) {
  return request({
    url: '/api/project/generateProject',
    method: 'post',
    params: { id }
  })
}

export function apiAddEntityFromSql(data) {
  // console.log(data);
  // debugger;
  return request({
    url: '/api/project/addEntityBySql',
    method: 'get',
    params: data
  })
}

export function apiAddEntitiesFromDb(data) {
  return request({
    url: '/api/project/addEntitiesFromDb',
    method: 'get',
    params: data
  })
}

export function apiAddEntity(data) {
  return request({
    url: '/entity/save',
    method: 'post',
    data
  })
}

export function apiGenerateEntity(id) {
  return request({
    url: '/api/project/generateEntity/' + id,
    method: 'get'
  })
}
export function apiGenerateER(query) {
  return request({
    url: '/api/project/apiGenerateER',
    method: 'get',
    params: query
  })
}
