{
  //window
  "window.zoomLevel": -1.2,
  "window.titleBarStyle": "custom",
  "window.title": "${activeEditorMedium}${separator}${rootName} ${dirty}",

  //workbench
  "workbench.activityBar.visible": false,
  "workbench.editor.showTabs": false,

  // editor
  "editor.fontSize": 14,
  "editor.fontWeight": "400",
  "editor.lineNumbers": "on",
  "editor.fontFamily": "Fira Code, Operator Mono",
  "editor.fontLigatures": true,
  "editor.wordWrap": "on",
  "editor.minimap.enabled": false,
  "editor.suggestLineHeight": 28,
  "editor.cursorBlinking": "expand",
  "eslint.alwaysShowStatus": true,
  "editor.cursorSmoothCaretAnimation": true,
  "editor.scrollbar.horizontal": "hidden",
  "editor.scrollbar.vertical": "hidden",
  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "scope": "comment",
        "settings": {
          "fontStyle": "italic"
        }
      }
    ]
  },
  // config related to code formatting
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  "[vue]": {
    "editor.formatOnSave": false
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.tslint": true,
    "source.organizeImports": true
  },
  "prettier.disableLanguages": ["javascript", "javascriptreact"],

  "workbench.sideBar.location": "right",
  "workbench.statusBar.visible": true,
  "breadcrumbs.enabled": false,

  //terminal
  "terminal.integrated.fontSize": 14,
  "terminal.integrated.fontFamily": "Fira Code, Operator Mono",
  "terminal.integrated.fontWeight": "500",

  "workbench.colorTheme": "default",
  "workbench.iconTheme": "material-icon-theme",

  // themes customization
  "workbench.colorCustomizations": {
    "terminal.background": "#1D2021",
    "terminal.foreground": "#A89984",
    "terminalCursor.background": "#A89984",
    "terminalCursor.foreground": "#A89984",
    "terminal.ansiBlack": "#1D2021",
    "terminal.ansiBlue": "#0D6678",
    "terminal.ansiBrightBlack": "#665C54",
    "terminal.ansiBrightBlue": "#0D6678",
    "terminal.ansiBrightCyan": "#8BA59B",
    "terminal.ansiBrightGreen": "#95C085",
    "terminal.ansiBrightMagenta": "#8F4673",
    "terminal.ansiBrightRed": "#FB543F",
    "terminal.ansiBrightWhite": "#FDF4C1",
    "terminal.ansiBrightYellow": "#FAC03B",
    "terminal.ansiCyan": "#8BA59B",
    "terminal.ansiGreen": "#95C085",
    "terminal.ansiMagenta": "#8F4673",
    "terminal.ansiRed": "#FB543F",
    "terminal.ansiWhite": "#A89984",
    "terminal.ansiYellow": "#FAC03B",

    "editor.background": "#00000000",
    "scrollbar.shadow": "#ffffff00",
    "titleBar.activeBackground": "#19191900",
    "titleBar.activeForeground": "#ffffff00",
    "activityBar.background": "#06080600",
    "panel.background": "#0f0c0cb3",
    "panel.border": "#09bea3ac"
  }
}
