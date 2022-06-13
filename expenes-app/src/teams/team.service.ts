import { Injectable } from "@nestjs/common";
import { Teams } from "../db";
import { TeamsResponseDto } from "./dto/teams.dto";



@Injectable()
export class TeamService {
	private teams = Teams;

	getTeams() : TeamsResponseDto[] {
		return (this.teams);
	}

	getTeamById(TeamId: number ) : TeamsResponseDto {
		return (this.teams.find( team => {
			return (team.TeamId == TeamId);
		}))
	}
}
