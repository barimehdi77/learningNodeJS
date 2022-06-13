import { Module } from "@nestjs/common";
import { ExpressAdapter } from "@nestjs/platform-express";
import { TeamService } from "./team.service";
import { TeamsController } from "./teams.controller";



@Module({
	controllers: [ TeamsController ],
	providers: [ TeamService ],
	exports: [ TeamService ]
})
export class TeamsModule {}
