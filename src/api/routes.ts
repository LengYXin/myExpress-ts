/*此文件由node自动生成 无需修改 （BuildingPlugin.js） */
//filters
let modularList: { name: string, routers: any }[] = [];
//   public/applyType
import * as index from './controllers/index';
import * as users from './controllers/users';
import * as user from './controllers/user';
import * as api from './controllers/api';

modularList.push({ name: 'index', routers: index });
modularList.push({ name: 'users', routers: users });
modularList.push({ name: 'user', routers: user });
modularList.push({ name: 'api', routers: api });

export { modularList };