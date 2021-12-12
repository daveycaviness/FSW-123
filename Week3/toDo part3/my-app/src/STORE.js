import {v4 as uuid} from "uuid"

const todos = [
    {text: "Walk Egypt", id: uuid(), isCompleted: false},
    {text: "Go to the Gym", id: uuid(), isCompleted: false},
    {text: "Wash my new Audi S4", id: uuid(), isCompleted: false}, 
    {text: "Play stupid games, win stupid prizes", id: uuid(), isCompleted: false}
]

export default todos
