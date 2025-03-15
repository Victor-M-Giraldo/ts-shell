# ts-shell

A POSIX-compliant shell implementation written in TypeScript.

## Features

### Basic Shell Functionality
- Interactive REPL (Read-Eval-Print Loop) experience
- Custom shell prompt
- Command parsing and execution
- Proper handling of invalid commands

### Built-in Commands
- `exit`: Exit the shell with proper status code
- `echo`: Display text to the terminal
- `type`: Identify command types (builtins vs executable files)
- `pwd`: Print current working directory
- `cd`: Change directory with support for:
  - Absolute paths
  - Relative paths
  - Home directory expansion (`~`)

### Advanced Features
- **Quoting Support**:
  - Single quotes (`'text'`)
  - Double quotes (`"text"`)
  - Backslash escaping (`\`)
    - Outside quotes
    - Within single quotes
    - Within double quotes
  - Proper handling of quoted executable paths

- **Redirection**:
  - Redirect stdout (`command > file`)
  - Redirect stderr (`command 2> file`)
  - Append to stdout (`command >> file`)
  - Append to stderr (`command 2>> file`)

- **Autocompletion**:
  - Built-in command completion
  - Command argument completion
  - Executable file completion
  - Multiple completion suggestions
  - Partial completions

## Getting Started

### Prerequisites

- Node.js (version 14+)
- TypeScript

### Installation

1. Clone this repository
```bash
git clone https://github.com/yourusername/ts-shell.git
cd ts-shell
```

2. Install dependencies
```bash
npm install
```

3. Build the project
```bash
npm run build
```

4. Run the shell
```bash
npm start
```

## Usage Examples

```bash
# Basic commands
$ echo Hello World
Hello World

# Using the type command
$ type echo
echo is a shell builtin
$ type ls
ls is /usr/bin/ls

# Directory navigation
$ pwd
/home/user/projects
$ cd /tmp
$ pwd
/tmp
$ cd ~
$ pwd
/home/user

# Using quotes
$ echo "Hello 'World'"
Hello 'World'
$ echo 'Hello "World"'
Hello "World"
$ echo Hello\ World
Hello World

# Redirection
$ echo Hello > greeting.txt
$ cat greeting.txt
Hello
$ echo Error 2> error.log
$ echo Append >> greeting.txt
$ cat greeting.txt
Hello
Append

# Tab completion
$ e[TAB]
echo exit
$ cd /ho[TAB]
$ cd /home/
```
