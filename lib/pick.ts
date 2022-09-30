// 类型合并
export type Pick<T, D extends keyof T> = {
  [P in D]: T[P]
}
