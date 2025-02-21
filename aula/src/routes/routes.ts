import { Express } from 'express';
import express from 'express'
import person from './person.ts'
import task from '../routes/task.ts';

export default function (app: Express) {
app
    .use(express.json())
    .use('/tasks', task)
}