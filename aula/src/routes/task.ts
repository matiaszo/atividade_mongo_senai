import express, { Request, Response, Router } from 'express';
import Task from "../model/task.ts";

const router: Router = express.Router();

router
.get('', async (req: Request, res: Response) => {
    try {
        const allTasks = await Task.find()
        res.status(200).send(allTasks);
    } catch (error) {
        res.status(400).send(`Error to retrieve tasks: ${error}`)
    }
})

.post('', async (req: Request, res: Response) => {

    try {
        const {description, status} = req.body
    
        const newTask = new Task({description, status}) 
    
        await newTask.save()
        res.status(200).send({message: "Task added succesfully.", task: newTask})
        
    } catch (error) {
        res.status(400).send({message: `Error to create task: ${error}` , task: null})
    }

})

.patch(':id', async (req: Request, res: Response) => {
    try {
        const {status} = req.body;
        const { id } = req.params;
    
        await Task.findByIdAndUpdate(id, {status: status});
        res.status(200).send({message: "Task updated succesfully.", task: await Task.findById(id)})

    } catch (error) {
        res.status(400).send({message: `Error to update task: ${error}` , task: null})
    }
})

.delete(':id', async (req: Request, res: Response) => {
    try {
        const {id} = req.params;

        await Task.findByIdAndDelete(id);
        res.status(200).send("Task deleted succesfully.")
    } catch (error) {
        res.status(400).send("Error to delete.")
    }
})

export default router
