export class TeamsResponseDto {
	TeamId: number;
	TeamName: string;
	TeamPlayers: string[];
	TeamCaptin: string;
}

export class MatchesResultDto {
	FirstTeam: string;
	SecondTeam: string;
	WinningTeam: string;
	MatchResult: string;
}

export class TeamInfoDto {
	TeamPublicInfo: TeamInfoDto;
	TeamWinMatches: MatchesResultDto[];
	TotalWinMatcher: number;
	TotalLosesMatches: number;
	TotalDrawMatchers: number;
	TotalPlayedMatches: number;
}
