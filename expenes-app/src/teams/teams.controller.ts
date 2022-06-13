import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { TeamInfoDto, TeamsResponseDto } from "./dto/teams.dto";
import { TeamService } from "./team.service";


@Controller('teams')
export class TeamsController {

	constructor (private readonly teamService: TeamService) {};

	@Get()
	getTeams(): TeamsResponseDto[] {
		return (this.teamService.getTeams());
	}

	@Get('/:TeamId')
	getTeamById(
		@Param('TeamId') TeamId: number,
	): TeamsResponseDto {
		return (this.teamService.getTeamById(TeamId));
	}

	@Post()
	CreateNewTeam(
		@Body() TeamInfo: TeamsResponseDto,
	) : TeamsResponseDto {
		return (this.teamService.CreateNewTeam(TeamInfo));
	}
}
