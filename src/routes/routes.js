import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';

// Public routers
const publicRouters = [
    { path: config.routers.home, component: Home },
    { path: config.routers.following, component: Following },
    { path: config.routers.profile, component: Profile },
    { path: config.routers.upload, component: Upload, layout: HeaderOnly },
    { path: config.routers.search, component: Search, layout: null },
    { path: config.routers.live, component: Live },
];

const privateRouters = [];

export { publicRouters, privateRouters };
