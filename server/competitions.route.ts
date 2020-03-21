import { Request, Response } from 'express';
const fs = require('fs');

export function getCompetitions(req: Request, res: Response) {
    setTimeout(() => {
        fs.readFile(__dirname + '/data/competitions.json', (err, json) => {
            let obj = JSON.parse(json);
            res.status(200).json({ payload: Object.values(obj) });
        });
    }, 200);
}


export function getCompetitionsCategories(req: Request, res: Response) {
    setTimeout(() => {
        fs.readFile(__dirname + '/data/competitions_categories.json', (err, json) => {
            let obj = JSON.parse(json);
            res.status(200).json({ payload: Object.values(obj) });
        });
    }, 200);
}


export function getCompetitionsTypes(req: Request, res: Response) {
    setTimeout(() => {
        fs.readFile(__dirname + '/data/competitions_types.json', (err, json) => {
            let obj = JSON.parse(json);
            res.status(200).json({ payload: Object.values(obj) });
        });
    }, 200);
}

export function getCompetitionsNames(req: Request, res: Response) {
    setTimeout(() => {
        fs.readFile(__dirname + '/data/competitions_names.json', (err, json) => {
            let obj = JSON.parse(json);
            res.status(200).json({ payload: Object.values(obj) });
        });
    }, 200);
}







