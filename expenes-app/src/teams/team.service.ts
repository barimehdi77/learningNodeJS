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

	CreateNewTeam(Team : TeamsResponseDto) : TeamsResponseDto {
		let NewTeam = {
			TeamId: Math.floor(100000 + Math.random() * 900000),
			...Team
		}
		this.teams.push(NewTeam);
		return (NewTeam);
	}
}
