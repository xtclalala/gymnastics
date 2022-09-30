import { Merge } from './merge'

// 类型合并
export type Readonly<T, D extends keyof T> = Merge<
  {
    readonly [P in D]: T[P]
  },
  {
    [L in keyof T]: L extends D ? T[L] : never
  }
>
