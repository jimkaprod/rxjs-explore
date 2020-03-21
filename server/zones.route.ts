import { Request, Response } from 'express';
const fs = require('fs');

export function getZones(req: Request, res: Response) {
    setTimeout(() => {
        fs.readFile(__dirname + '/data/zones.json', (err, json) => {
            let obj = JSON.parse(json);
            res.status(200).json({ payload: Object.values(obj) });
        });
    }, 200);
}

export function getZonesNames(req: Request, res: Response) {
    setTimeout(() => {
        fs.readFile(__dirname + '/data/zones_names.json', (err, json) => {
            let obj = JSON.parse(json);
            res.status(200).json({ payload: Object.values(obj) });
        });
    }, 200);
}
