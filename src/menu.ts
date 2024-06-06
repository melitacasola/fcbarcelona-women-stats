import { DataProvider} from './interfaces/dataProvider';
import { Player } from './interfaces/player';

export class Menu {
  private dataProvider: DataProvider;

  constructor(dataProvider: DataProvider) {
    this.dataProvider = dataProvider;
  }

  displayMenu(): void {
    console.log("1. Listado de jugadoras goleadoras");
    console.log("2. Listado de jugadoras con mas disparos");
    console.log("3. Listado de jugadoras con mas pases");
    console.log("4. Listado de jugadoras con mas asistencias");
    console.log("5. Listado de jugadoras con mas recuperaciones");
    console.log("6. Listado de jugadoras con mas tarjetas amarillas");
    console.log("7. Listado de jugadoras con mas tarjetas rojas");
    console.log("8. Listado de jugadoras con mas faltas");
    console.log("9. Salir");
  }

  handleUserInput(option: string): void {
    switch (option) {
      case "1":
        this.displayPlayers(this.dataProvider.getWinningGoal(), "goleadoras", "goals");
        break;
      case "2":
        this.displayPlayers(this.dataProvider.getPlayersWithMostShots(), "con mas disparos", "shots_on_target_inc_goals");
        break;
      case "3":
        this.displayPlayers(this.dataProvider.getPlayersWithMostPasses(), "con mas pases", "total_passes");
        break;
      case "4":
        this.displayPlayers(this.dataProvider.getPlayersWithMostAssists(), "con mas asistencias", "goal_assists");
        break;
      case "5":
        this.displayPlayers(this.dataProvider.getPlayersWithMostInterceptions(), "con mas recuperaciones", "interceptions");
        break;
      case "6":
        this.displayPlayers(this.dataProvider.getPlayersWithMostYellowCards(), "con mas tarjetas amarillas", "yellow_cards");
        break;
      case "7":
        this.displayPlayers(this.dataProvider.getPlayersWithMostRedCards(), "con mas tarjetas rojas", "red_cards");
        break;
      case "8":
        this.displayPlayers(this.dataProvider.getPlayersWithMostFouls(), "con mas faltas", "total_fouls_conceded");
        break;
      case "9":
        console.log("Saliendo de la aplicación...");
        process.exit();
      default:
        console.log("Opción inválida. Por favor, seleccione una opción válida del menú.");
    }
  }

  private displayPlayers(players: Player[], description: string, statName: string): void {
    console.log(`Listado de jugadoras ${description}:`);
    players.forEach((player, index) => {
      const playerName = player.extra_info.name;
      const statValue = player.stats.find(stat => stat.name === statName)?.stat || 0;
      console.log(`${index + 1}. ${playerName} - ${description}: ${statValue}`);
    });
    console.log("Seleccione otra opción:");
  }
}
