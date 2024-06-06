import { Player } from './player';

export interface DataProvider {
  getPlayers(): Player[];
  getWinningGoal(): Player[];
  getPlayersWithMostShots(): Player[];
  getPlayersWithMostPasses(): Player[];
  getPlayersWithMostAssists(): Player[];
  getPlayersWithMostInterceptions(): Player[];
  getPlayersWithMostYellowCards(): Player[];
  getPlayersWithMostRedCards(): Player[];
  getPlayersWithMostFouls(): Player[];
}
