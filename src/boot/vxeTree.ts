//  文档地址 https://mengqiuleo.github.io/vxe-tree/

import { boot } from 'quasar/wrappers';
import vxeTree from 'vxe-tree';
import 'vxe-tree/dist/index.css';
// import '@univerjs/design/lib/index.css';

export default boot(({ app }) => {
  app.use(vxeTree);
});
