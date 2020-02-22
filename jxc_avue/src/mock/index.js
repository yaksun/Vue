import user from './user';
import menu from './menu';
import admin from './admin';
import goods from './goods';
import supplier from './supplier'
import goodsCategory from './goodsCategory'

/**
 * 模拟数据mock
 * 
 * mock是否开启模拟数据拦截
 */

user({ mock: true });

menu({ mock: true });

admin({ mock: true });
goods({ mock: true });
supplier({mock:true});
goodsCategory({mock:true})