import { Menu } from './menu';
import { TeamDataProvider } from './teamDataProvider';
import * as readline from 'readline';

const dataProvider = new TeamDataProvider();

const menu = new Menu(dataProvider);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  menu.displayMenu();

  rl.question("Seleccione una opción: ", (option) => {
    menu.handleUserInput(option);
    showMenu(); 
  });
}

showMenu();
