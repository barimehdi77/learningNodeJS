import { Controller, Get } from "@nestjs/common";
import { Week } from '../db'


@Controller()
export class AppController {
	@Get()
	getHome() {
		return Week;
	}
}
