import { Todo } from "@prisma/client"

export interface TodoResponse {
    id: number
    title: string
    description: string
    priority: string
    due_date: string
    status: string
}

export function toTodoResponseList(prismaTodo: Todo[]): TodoResponse[] {
    const result = prismaTodo.map((todo) => {
        return {
            id: todo.id,
            title: todo.title,
            description: todo.description,
            priority: todo.priority,
            due_date: todo.due_date,
            status: todo.status,
        }
    })

    return result
}

export function toTodoResponse(prismaTodo: Todo): TodoResponse {
    return {
        id: prismaTodo.id,
        title: prismaTodo.title,
        description: prismaTodo.description,
        priority: prismaTodo.priority,
        due_date: prismaTodo.due_date,
        status: prismaTodo.status,
    }
}

export interface TodoCreateRequest {
    title: string
    description: string
    priority: string
    due_date: string
    status: string
}

export interface TodoUpdateRequest {
    id: number
    title: string
    description: string
    priority: string
    due_date: string
    status: string
}
