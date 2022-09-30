import { Equal, Expect } from '@type-challenges/utils'
import { Merge, MergeCover, MergeCut } from '../lib/merge'

type cases = [
  Expect<Equal<Expected1, Merge<Todo, Todo1>>>
  // Expect<Equal<Expected1, MergeCover<Todo, Todo1>>>
  // Expect<Equal<Expected1, MergeCut<Todo, Todo1>>>
  // MyPick<Todo, 'title' | 'completed' | 'invalid'>
]

interface Todo {
  title: string
  description: string
  completed: boolean
}
interface Todo1 {
  title111: string
  description: boolean
}

interface Expected1 {
  title: string
  description: string | boolean
  completed: boolean
  title111: string
}
