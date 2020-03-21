import { Request, Response } from 'express';
const fs = require('fs');

export function getUsers(req: Request, res: Response) {
    setTimeout(() => {
        fs.readFile(__dirname + '/data/users.json', (err, json) => {
            let obj = JSON.parse(json);
            res.status(200).json({ payload: Object.values(obj) });
        });
    }, 200);
}
