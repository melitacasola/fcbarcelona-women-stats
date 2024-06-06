import { TeamDataProvider } from "../src/teamDataProvider";

describe('TeamDataProvider', () => {
  let dataProvider: TeamDataProvider;

  beforeEach(() => {
    dataProvider = new TeamDataProvider();
  });

  it('getWinningGoal should return players sorted by goals', () => {
    const topScorers = dataProvider.getWinningGoal();
    expect(topScorers[0].extra_info.name).toBe('Caroline Hansen'); 
    const topScorerGoals = topScorers[0].stats.find(stat => stat.name === 'goals')?.stat || 0;
    expect(topScorerGoals).toBe(19);
  });
  
  it('getPlayersWithMostShots should return player sorted by shorts', ()=>{
    const playerMoreShots = dataProvider.getPlayersWithMostShots();
    expect(playerMoreShots[0].extra_info.name).toBe('Clàudia Pina')

  })

  it('getPlayersWithMostPasses should return player sorted by passes', ()=>{
    const playerMorePasses = dataProvider.getPlayersWithMostPasses();
    expect(playerMorePasses[0].extra_info.name).toBe('Patri Guijarro')

  })

  it('getPlayersWithMostAssists should return player sorted by assists', ()=>{
    const playerMoreAssists = dataProvider.getPlayersWithMostAssists();
    expect(playerMoreAssists[0].extra_info.name).toBe('Caroline Hansen')

  })

  it('getPlayersWithMostInterceptions should return player sorted by Interceptions', ()=>{
    const playerMoreInterceptions = dataProvider.getPlayersWithMostInterceptions();
    expect(playerMoreInterceptions[0].extra_info.name).toBe('Lucy Bronze')

  })

  it('getPlayersWithMostYellowCards should return player sorted by Yellow Cards', ()=>{
    const playerMoreYellowCards = dataProvider.getPlayersWithMostYellowCards();
    expect(playerMoreYellowCards[0].extra_info.name).toBe('Irene Paredes')

  })

  it('getPlayersWithMostRedCards should return player sorted by Red Cards', ()=>{
    const playerMoreRedCards = dataProvider.getPlayersWithMostRedCards();
    expect(playerMoreRedCards).toStrictEqual([]);

  })
  it('getPlayersWithMostFouls should return player sorted by Fouls', ()=>{
    const playerMoreFouls = dataProvider.getPlayersWithMostFouls();
    expect(playerMoreFouls[0].extra_info.name).toBe('Marta Torrejón')

  })

  it('getPlayersWithMostYellowCards should return players sorted by yellow cards', () => {
    const playersWithMostYellowCards = dataProvider.getPlayersWithMostYellowCards();
    expect(playersWithMostYellowCards[0].stats.find(stat => stat.name === 'yellow_cards')?.stat).toBeGreaterThanOrEqual(playersWithMostYellowCards[1].stats.find(stat => stat.name === 'yellow_cards')?.stat || 0);
  });
});
