import { EntityType } from '@/internal-types';

export type Index = EntityType<{
  id: string;
  name: string;
  tableId: string;
  indexColumnIds: string[];
  unique: boolean;
}>;
