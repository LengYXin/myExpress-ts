/*此文件由node自动生成 无需修改 （BuildingPlugin.js） */
//filters
let modularList: { path: string, router: any }[] = [];
//   public/applyType
import * as index from './controllers/index';
import * as users from './controllers/users';
import * as user from './controllers/user';

modularList.push({ path: '/', router: index.index });
modularList.push({ path: '/users', router: users.index });
modularList.push({ path: '/user', router: user.index });

export { modularList };