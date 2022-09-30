import { Equal, Expect } from '@type-challenges/utils'
import { Readonly } from '../lib/readonly'

type cases = [
  Expect<Equal<Expected1, Readonly<Todo, Todo1>>>
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
