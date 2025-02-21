import { Express } from 'express';
import express from 'express'

import task from './routes/task.routes.ts';

export default function (app: Express) {
app
    .use(express.json())
    .use('/tasks', task)
}