import 'package:all_emojis/all_emojis.dart';

void main() {
  // Get total number of available emojis
  print('Total emojis: ${allEmojis.length}\n'); // 5034 emojis

  // Working with specific emojis
  final heartEmoji = allEmojis['❤️']!;
  print('Heart emoji details:');
  print('Character: ${heartEmoji.char}');
  print('Name: ${heartEmoji.name}');
  print('Keywords: ${heartEmoji.keywords}');
  print('Group: ${heartEmoji.group}');

  // Finding emojis by keywords
  final foodEmojis = allEmojis.values
      .where((emoji) => emoji.keywords.contains('food'))
      .map((e) => e.char)
      .toList();
  print('\nFood-related emojis: $foodEmojis');

  // Working with emoji groups
  final animalEmojis = allEmojis.values
      .where((emoji) => emoji.group == EmojiGroup.animalsNature)
      .map((e) => e.char)
      .take(5)
      .toList();
  print('\nSome animal emojis: $animalEmojis');

  // Using regex to find emojis in text
  final text = 'Having lunch 🍕 with friends 👥 is fun! 🎉';
  final matches = emojiRegex.allMatches(text);
  print('\nEmojis found in text: ${matches.map((m) => m.group(0)).toList()}');

  // Emoji comparison
  final thumbsUp = allEmojis['👍']!;
  final thumbsDown = allEmojis['👎']!;
  print('\nEmoji comparison:');
  print('Are thumbs up and down the same? ${thumbsUp == thumbsDown}');
}
