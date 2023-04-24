import express from 'express';
import type { Express, Request, Response } from 'express';
import { initMongoose } from '../mongoose/mongoose-init';
import bodyParser from 'body-parser';

const app: Express = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

initMongoose().then((message) => {
	console.log(message);
});

app.get('/', (_req: Request, res: Response) => {
	res.send('hello world');
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
