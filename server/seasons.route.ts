import { Request, Response } from 'express';
const fs = require('fs');

export function getSeasons(req: Request, res: Response) {
    setTimeout(() => {
        fs.readFile(__dirname + '/data/seasons.json', (err, json) => {
            let obj = JSON.parse(json);
            res.status(200).json({ payload: Object.values(obj) });
        });
    }, 200);
}
