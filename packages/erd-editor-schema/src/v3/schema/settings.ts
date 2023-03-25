export type Settings = {
  width: number;
  height: number;
  scrollTop: number;
  scrollLeft: number;
  zoomLevel: number;
  show: number;
  database: number;
  databaseName: string;
  canvasType: string;
  language: number;
  tableCase: number;
  columnCase: number;
  bracketType: number;
  relationshipDataTypeSync: boolean;
  relationshipOptimization: boolean;
  columnOrder: number[];
};

export const Show = {
  tableComment: /*        */ 0b0000000000000000000000000000001,
  columnComment: /*       */ 0b0000000000000000000000000000010,
  columnDataType: /*      */ 0b0000000000000000000000000000100,
  columnDefault: /*       */ 0b0000000000000000000000000001000,
  columnAutoIncrement: /* */ 0b0000000000000000000000000010000,
  columnPrimaryKey: /*    */ 0b0000000000000000000000000100000,
  columnUnique: /*        */ 0b0000000000000000000000001000000,
  columnNotNull: /*       */ 0b0000000000000000000000010000000,
  relationship: /*        */ 0b0000000000000000000000100000000,
} as const;

export const ColumnType = {
  columnName: /*          */ 0b0000000000000000000000000000001,
  columnDataType: /*      */ 0b0000000000000000000000000000010,
  columnNotNull: /*       */ 0b0000000000000000000000000000100,
  columnUnique: /*        */ 0b0000000000000000000000000001000,
  columnAutoIncrement: /* */ 0b0000000000000000000000000010000,
  columnDefault: /*       */ 0b0000000000000000000000000100000,
  columnComment: /*       */ 0b0000000000000000000000001000000,
} as const;
export const ColumnTypeList: ReadonlyArray<number> = Object.values(ColumnType);

export const Database = {
  MariaDB: /*    */ 0b0000000000000000000000000000001,
  MSSQL: /*      */ 0b0000000000000000000000000000010,
  MySQL: /*      */ 0b0000000000000000000000000000100,
  Oracle: /*     */ 0b0000000000000000000000000001000,
  PostgreSQL: /* */ 0b0000000000000000000000000010000,
  SQLite: /*     */ 0b0000000000000000000000000100000,
} as const;

export const Language = {
  GraphQL: /*    */ 0b0000000000000000000000000000001,
  csharp: /*     */ 0b0000000000000000000000000000010,
  Java: /*       */ 0b0000000000000000000000000000100,
  Kotlin: /*     */ 0b0000000000000000000000000001000,
  TypeScript: /* */ 0b0000000000000000000000000010000,
  JPA: /*        */ 0b0000000000000000000000000100000,
  Scala: /*      */ 0b0000000000000000000000001000000,
} as const;

export const NameCase = {
  none: /*       */ 0b0000000000000000000000000000001,
  camelCase: /*  */ 0b0000000000000000000000000000010,
  pascalCase: /* */ 0b0000000000000000000000000000100,
  snakeCase: /*  */ 0b0000000000000000000000000001000,
} as const;

export const BracketType = {
  none: /*        */ 0b0000000000000000000000000000001,
  doubleQuote: /* */ 0b0000000000000000000000000000010,
  singleQuote: /* */ 0b0000000000000000000000000000100,
  backtick: /*    */ 0b0000000000000000000000000001000,
} as const;
