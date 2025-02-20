import express, { Request, Response, Router } from 'express';
import Task from "../model/task.ts";

interface ITask
{
    id: string,
    description: string,
    status: number
}

const router: Router = express.Router();

router
.get('/tasks', (req: Request, res: Response) => {
    try {
        const allTasks = Task.find()
        res.status(200).send(allTasks);
    } catch (error) {
        res.status(400).send("Erro ao dar get")
    }
})

.post('/tasks', async (req: Request, res: Response) => {

    try {
        const {id, description, status} = req.body
    
        const newTask = new Task({id, description, status}) 
    
        await newTask.save()
        res.status(200).send("Pessoa adicionada")
        
    } catch (error) {
        res.status(400).send("Erro ao dar post")
    }

})


