<div align="center">
    <h1>ZeroSyntax-Server</h1>
    <img src="https://github.com/ViTeXFTW/ZeroSyntax/blob/main/ZeroSyntaxLogo128.png?raw=true">
</div>

## Introduction
**ZeroHour-Server** is a language server written in TypeScript for Command and Conquor Generals Zero Hour INI. The server is intended to provide formatting, linting and code completion. Currently this is intended for Visual Studio Code only, however all functionallities will be server sided and can be utilized in other IDEs by creating an interface for communicating with the server over Json-RPC.

## How to install

1. Open Visual Studio Code
2. Open the Extensions Tab
3. Search for ZeroSyntax
4. Click Install
5. Click Reload
6. Done!

## Functionallities
ZeroSyntax language server supports the following functionallities:
- Formatting
- Diagnostics
- Code Completion

### Formatting
To format a ini file you can use the following command:

1. Access it from the Command Pallette (Ctrl+Shift+P or Cmd+Shift+P on Mac)
2. Write:
```plaintext
> Format Document
```
3. Press Enter

### Diagnostics
Diagnostics works out of the box. Any syntax errors will be highlighted in the editor.

### Code Completion
The server supports context based code completion. This is done by analyzing the syntax tree and collecting possible completions based on the current context.

1. Write some code
2. Press Ctrl+Space

![Completions](./images/gifs/ZeroSyntax-ServerCompletionGif.gif)


## Contributing
See [CONTRIBUTIN](CONTRIBUTING)

## Licsens
This projct is under the MIT [LICENSE](LICENSE)

## Sugestions
As this is my first open-source project, if you have any ideas or suggestions please write to me on either Discord or mail. (Discord might be better)

## Questions
Discord: ViTeXFTW#6644  
Mail: vitexftw@gmail.com
