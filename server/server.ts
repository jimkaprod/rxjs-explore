
import * as express from 'express';
import { Application } from "express";
import { getAllCourses, getCourseById } from "./get-courses.route";
import { searchLessons } from "./search-lessons.route";
import { saveCourse } from './save-course.route';
/////////////////////////////////////////////
import { getZones } from "./zones.route";
import { getCompetitions, getCompetitionsCategories, getCompetitionsTypes, getCompetitionsNames } from "./competitions.route";
import { getVideosGames } from "./videos_games.route";
import { getUsers } from "./users.route";
import { getTeams, getTeamsTypes, getTeamsNames, getTeamsLevels } from "./teams.route";
import { getSeasons } from "./seasons.route";
import { getRoles } from "./roles.route";
import { getCountries } from "./countries.route";






const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/:id').get(getCourseById);

app.route('/api/lessons').get(searchLessons);

app.route('/api/courses/:id').put(saveCourse);
//////////////////////////////////////////////
app.route('/api/zones').get(getZones);

app.route('/api/competitions').get(getCompetitions);

app.route('/api/competitionsCategories').get(getCompetitionsCategories);

app.route('/api/competitionsTypes').get(getCompetitionsTypes);

app.route('/api/competitionsNames').get(getCompetitionsNames);

app.route('/api/videosGames').get(getVideosGames);

app.route('/api/users').get(getUsers);

app.route('/api/teams').get(getTeams);

app.route('/api/teamsTypes').get(getTeamsTypes);

app.route('/api/teamsNames').get(getTeamsNames);

app.route('/api/teamsLevels').get(getTeamsLevels);

app.route('/api/seasons').get(getSeasons);

app.route('/api/roles').get(getRoles);

app.route('/api/countries').get(getCountries);


const httpServer: any = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});



