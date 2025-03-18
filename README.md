# all_emojis

A comprehensive Dart package that provides access to a complete collection of emojis with detailed metadata, search capabilities, and regex support.

## Features

- 5034+ emojis with detailed metadata
- Emoji regex pattern matching
- Emoji search by keywords
- Group-based emoji filtering
- Full Unicode emoji support

## Installation

Add this to your package's `pubspec.yaml` file:

```yaml
dependencies:
  all_emojis: ^0.1.0
```

## Usage

### Basic Usage

```dart
import 'package:all_emojis/all_emojis.dart';

// Get total number of available emojis
print('Total emojis: ${emojis.length}'); // 5034 emojis

// Access specific emoji and its metadata
final heartEmoji = emojis['❤️']!;
print('Character: ${heartEmoji.char}');      // ❤️
print('Name: ${heartEmoji.name}');           // red heart
print('Keywords: ${heartEmoji.keywords}');    // [heart, love, ...]
print('Group: ${heartEmoji.group}');         // EmojiGroup.smileysAndEmotion
print('Version: ${heartEmoji.emojiVersion}'); // 1.0
```

### Finding Emojis by Keywords

```dart
// Get all food-related emojis
final foodEmojis = emojis.values
    .where((emoji) => emoji.keywords.contains('food'))
    .map((e) => e.char)
    .toList();

// Search for emojis with multiple keywords
final happyEmojis = emojis.values
    .where((emoji) => emoji.keywords.any((k) => 
        k.contains('happy') || k.contains('joy') || k.contains('smile')))
    .map((e) => e.char)
    .toList();
```

### Working with Emoji Groups

```dart
// Get animal emojis
final animalEmojis = emojis.values
    .where((emoji) => emoji.group == EmojiGroup.animalsNature)
    .map((e) => e.char)
    .take(5)
    .toList();
```

### Emoji Pattern Matching

```dart
// Find all emojis in a text
final text = 'Having lunch 🍕 with friends 👥 is fun! 🎉';
final matches = emojiRegex.allMatches(text);
final foundEmojis = matches.map((m) => m.group(0)).toList();

// Check if a string contains emojis
final hasEmojis = emojiRegex.hasMatch(text); // true

// Get emoji positions in text
final emojiPositions = emojiRegex.allMatches(text)
    .map((m) => m.start)
    .toList();
```

## Emoji Properties

Each emoji object contains the following properties:

- `char`: The emoji character
- `name`: The official emoji name
- `keywords`: List of related keywords
- `slug`: URL-friendly name
- `group`: Emoji category group
- `emojiVersion`: The emoji version

## Emoji Groups

Emojis are categorized into the following groups:

- `smileysAndEmotion`: 😊 😍 😎
- `peopleAndBody`: 👋 👨‍👩‍👧‍👦 🧑‍🤝‍🧑
- `animalsNature`: 🐶 🐱 🐭
- `foodAndDrink`: 🍎 🍕 🍺
- `travelAndPlaces`: ✈️ 🏖️ 🏰
- `activities`: ⚽️ 🎮 🎨
- `objects`: 💡 📱 💻
- `symbols`: ❤️ ⭐️ ⚡️
- `flags`: 🏁 🏳️ 🏳️‍🌈

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Note

This library is generated with the latest available emoji dataset ([v15](https://www.unicode.org/reports/tr51/tr51-23.html)) from Unicode, using a code generator based on https://github.com/alfalcon90/unicode-emoji-dart from https://github.com/alfalcon90. It uses the following libraries to compile the dataset:

- [`emojilib`](https://github.com/muan/emojilib): provides a list of keywords for every emoji
- [`emoji.json`](https://github.com/amio/emoji.json): provides emoji data in JSON format
- [`emoji-regex`](https://github.com/mathiasbynens/emoji-regex): a regular expression to match all emoji symbols and sequences

### Update the generated emojis to latest Unicode version

1. `cd generator`
2. `npm install`
3. `npm run generate`
4. Publish it to "pub.dev"

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Unicode License Agreement

https://www.unicode.org/license.html