import { Request, Response } from 'express';
const fs = require('fs');

export function getVideosGames(req: Request, res: Response) {
    setTimeout(() => {
        fs.readFile(__dirname + '/data/videos_games.json', (err, json) => {
            let obj = JSON.parse(json);
            res.status(200).json({ payload: Object.values(obj) });
        });
    }, 200);
}
