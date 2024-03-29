# Akcelerator

> Definiowanie skrótów klawiaturowych.

Accelerators are Strings that can contain multiple modifiers and a single key code, combined by the `+` character, and are used to define keyboard shortcuts throughout your application.

Przykłady:

* `CommandOrControl+A`
* `CommandOrControl+Shift+Z`

Skróty są zarejestrowane z modułem [`globalShortcut`](global-shortcut.md), za pomocą metody [`register`](global-shortcut.md#globalshortcutregisteraccelerator-callback), tj.

```javascript
const { app, globalShortcut } = require('electron')

app.on('ready', () => {
  // Register a 'CommandOrControl+Y' shortcut listener.
  globalShortcut.register('CommandOrControl+Y', () => {
    // Do stuff when Y and either Command/Control is pressed.
  })
})
```

## Uwagi do platform

Na systemach Linux oraz Windows klawisz `Command` nie ma żadnego wpływu, więc należy używać `CommandOrControl`, który reprezentuje `command` na systemie macOS i `control` na systemach Linux oraz Windows, aby zdefiniować niektóre akceleratory.

Używaj `Alt` zamiast `Option`. Klawisz `Option` istnieje tylko w systemie macOS, mając na uwadze, że klawisz `Alt` jest dostępny na wszystkich systemach.

Klawisz `Super` jest mapowany do klawisza`Windows` w systemach Windows i Linux oraz jako `Cmd` na macOS.

## Dostępne modyfikatory

* `Command` (lub `Cmd` w skrócie)
* `Control` (lub `Ctrl` w skrócie)
* `CommandOrControl` (lub `CmdOrCtrl` w skrócie)
* `Alt`
* `Option`
* `AltGr`
* `Shift`
* `Super`

## Dostępne kody klucza

* od `0` do `9`
* od `A` do `Z`
* od `F1` do `F24`
* Znaki interpunkcyjne takie jak `~`, `!`, `@`, `nr`, `` $, itp.
* `Plus`
* `Space`
* `Tab`
* `Capslock`
* `Numlock`
* `Scrolllock`
* `Backspace`
* `Delete`
* `Insert`
* `Return` (lub `Enter` jako alias)
* strzałki `Up`, `Down`, `Left` oraz `Right`
* `Home` oraz `End`
* `PageUp` oraz `PageDown`
* `Escape` (albo`Esc` w skrócie)
* `VolumeUp`, `VolumeDown` i `VolumeMute`
* `MediaNextTrack`, `MediaPreviousTrack`, `MediaStop` i `MediaPlayPause`
* `PrintScreen`
* NumPad Keys 
  * `num0` - `num9`
  * `numdec` - decimal key
  * `numadd` - numpad `+` key
  * `numsub` - numpad `-` key
  * `nummult` - numpad `*` key
  * `numdiv` - numpad `÷` key