// 类型合并
export type Merge<T, D> = {
  [P in keyof T | keyof D]: P extends keyof T & keyof D
    ? T[P] | D[P]
    : P extends keyof T
    ? T[P]
    : P extends keyof D
    ? D[P]
    : never
}

// 类型合并 相同字段以后一个类对象为准
export type MergeCover<T, D> = {
  [P in keyof T | keyof D]: P extends keyof D ? D[P] : P extends keyof T ? T[P] : never
}

// 类型合并 相同字段以前一个类对象为准
export type MergeCut<T, D> = {
  [P in keyof T | keyof D]: P extends keyof T ? T[P] : P extends keyof D ? D[P] : never
}
