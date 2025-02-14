import express, { Request, Response, Router } from 'express';


interface IPerson 
{
    "id": number,
    "name": string,
    "lastName": number
}

const router: Router = express.Router();
let people: IPerson[] = [];

router
.post('/usuarios', (req: Request, res: Response) => {
    const {nome, sobrenome } = req.body
    people.push({id: people.length, name: nome, lastName: sobrenome})
    res.status(200).send(`Pessoa ${nome} ${sobrenome} recebida com sucesso!`);
})

.get('/usuarios'
    , (req: Request, res: Response) => {
    res.status(200).send(`Fazendo um get no servidor!`);
})

.get('/usuarios/:id'
    , (req: Request, res: Response) => {
    const { id } = req.params

    res.status(200).send(people.find((p) => p.id === parseInt(id)));
})

.put('/usuarios/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const { nome, sobrenome } = req.body;
    const user = people.find((p) => p.id === parseInt(id))

    if (!user)
        return
    user.name = nome
    user.lastName = sobrenome
    res.status(200).send(`Pessoa com o id: ${id} foi atualizado para ${nome} ${sobrenome}`)
})

.patch('/usuarios/:id'
    , (req: Request, res: Response) => {
    const { id } = req.params;
    const { nome } = req.body;

    const user = people.find((p) => p.id === parseInt(id))

    if (!user)
        return
    user.name = nome
    res.send(`Nome da pessoa com ID ${id} foi atualizado para: ${nome}`);
    })


.delete('/deletar/:id', (req: Request, res: Response) => {
    const { id } = req.params

    people = people.filter((e) => e.id != parseInt(id))

    res.status(200).send(`Pessoa ${id} eliminada.`)
})

export default router;