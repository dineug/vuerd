import { SchemaV3Constants } from '@dineug/erd-editor-schema';

import { IndexColumn } from '@/internal-types';
import { getDefaultEntityMeta } from '@/utils';

export const createIndexColumn = (): IndexColumn => ({
  id: '',
  columnId: '',
  orderType: SchemaV3Constants.OrderType.ASC,
  meta: getDefaultEntityMeta(),
});
