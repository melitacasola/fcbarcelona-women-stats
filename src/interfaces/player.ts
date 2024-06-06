import { Stat } from './stat';

export interface Player {
  position: string;
  opta_player_id: string;
  stats: Stat[];
  shirt_number: number;
  extra_info: {
    playerId: number;
    name: string;
    slug: string;
    shirtNumber: number;
    country: string;
    dateOfBirth: string;
  };
}