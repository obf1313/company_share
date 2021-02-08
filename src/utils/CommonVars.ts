/**
 * @description: 公共变量
 * @author: cnn
 * @createTime: 2020/7/16 16:53
 **/
interface Colors {
  // 主题色
  primaryColor: string,
  error: string
}

export const colors: Colors = {
  primaryColor: '#eb6383',
  error: '#f5222d'
};
/**
 * API 接口路径
 **/
export const serverPath: string = '/api/';
/**
 * 服务器部署前缀路径
 * **/
export const { platform } = require('./../../projectConfig.js');
