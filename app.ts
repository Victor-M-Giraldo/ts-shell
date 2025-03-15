import { createInterface } from 'readline';
import { platform } from 'os';

const shellCommands = ['exit', 'echo', 'type'] as const;
const OS = platform();
console.log(OS);

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = '$ ';

rl.setPrompt(prompt);

rl.on('line', (resp) => {
  const [command, ...args] = resp.split(' ');
  console.log(command);
  console.log(args);
  console.log(process.env.PATH);

  switch (command) {
    case 'exit':
      if (args.length === 1 && args[0] === '0') {
        rl.close();

        process.exit(0);
      }

      break;

    case 'echo':
      console.log(args.join(' '));

      rl.prompt();

      break;

    case 'type':
      if (shellCommands.includes(args[0])) {
        console.log(`${args[0]} is a shell builtin`);
      } else {
        console.log(`${args[0]} not found`);
      }

      rl.prompt();

      break;

    default:
      console.log(`${resp}: command not found`);

      rl.prompt();
  }
});

rl.prompt();
