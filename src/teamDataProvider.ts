import { Player } from './interfaces/player';
import { DataProvider } from './interfaces/dataProvider';
import playersData from './utils/players_data.json';

export class TeamDataProvider implements DataProvider {
    private players: Player[];

    constructor() {
        this.players = playersData.player_stats;
    }

    getPlayers(): Player[] {
        return this.players;
    }

    private getPlayersSortedByStat(statName: string): Player[] {
        return this.players
            .filter(player => player.stats.some(stat => stat.name === statName))
            .sort((a, b) => {
                const aStat = a.stats.find(stat => stat.name === statName)?.stat || 0;
                const bStat = b.stats.find(stat => stat.name === statName)?.stat || 0;
                return bStat - aStat;
            });
    }

    getWinningGoal(): Player[] {
        return this.getPlayersSortedByStat("goals");
    }

    getPlayersWithMostShots(): Player[] {
        return this.getPlayersSortedByStat("shots_on_target_inc_goals");
    }

    getPlayersWithMostPasses(): Player[] {
        return this.getPlayersSortedByStat("total_passes");
    }

    getPlayersWithMostAssists(): Player[] {
        return this.getPlayersSortedByStat("goal_assists");
    }

    getPlayersWithMostInterceptions(): Player[] {
        return this.getPlayersSortedByStat("interceptions");
    }

    getPlayersWithMostYellowCards(): Player[] {
        return this.getPlayersSortedByStat("yellow_cards");
    }

    getPlayersWithMostRedCards(): Player[] {
        return this.getPlayersSortedByStat("red_cards");
    }

    getPlayersWithMostFouls(): Player[] {
        return this.getPlayersSortedByStat("total_fouls_conceded");
    }
}
