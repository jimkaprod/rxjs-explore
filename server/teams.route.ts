import { Request, Response } from 'express';
const fs = require('fs');

export function getTeams(req: Request, res: Response) {
    setTimeout(() => {
        res.status(200).json({ payload: Object.values([{ "status": "work in progress ..." }]) });
        // fs.readFile(__dirname + '/data/zones.json', (err, json) => {
        //     let obj = JSON.parse(json);
        //     res.status(200).json({ payload: Object.values(obj) });
        // });
    }, 200);
}

export function getTeamsTypes(req: Request, res: Response) {
    setTimeout(() => {
        fs.readFile(__dirname + '/data/teams_types.json', (err, json) => {
            let obj = JSON.parse(json);
            res.status(200).json({ payload: Object.values(obj) });
        });
    }, 200);
}

export function getTeamsNames(req: Request, res: Response) {
    setTimeout(() => {
        fs.readFile(__dirname + '/data/teams_names.json', (err, json) => {
            let obj = JSON.parse(json);
            res.status(200).json({ payload: Object.values(obj) });
        });
    }, 200);
}

export function getTeamsLevels(req: Request, res: Response) {
    setTimeout(() => {
        fs.readFile(__dirname + '/data/teams_levels.json', (err, json) => {
            let obj = JSON.parse(json);
            res.status(200).json({ payload: Object.values(obj) });
        });
    }, 200);
}
