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
        res.status(200).send("Task adicionada")
        
    } catch (error) {
        res.status(400).send("Erro ao dar post")
    }

})

.patch('/tasks/:id', async (req: Request, res: Response) => {
    try {
        const {status} = req.body;
        const { id } = req.params;
    
        await Task.findByIdAndUpdate(id, {status: status});
        res.status(200).send("Task atualizada")
    } catch (error) {
        res.status(400).send("Erro ao dar patch")
    }
})

.delete('tasks/:id', async (req: Request, res: Response) => {
    try {
        const {id} = req.params;

        await Task.findByIdAndDelete(id);
        res.status(200).send("Task eliminada")
    } catch (error) {
        res.status(400).send("Erro ao dar delete")
    }
})
