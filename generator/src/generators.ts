import { DartType, Fields, GenericObject } from "./types";
import { toCamelCase } from "./utils";
import emojiRegex from "emoji-regex";

export function generateEmojiRegex(): string {
  const regex = emojiRegex();

  return `final emojiRegex = RegExp(
  r"${regex.source}",
  unicode: ${regex.unicode},
  multiLine: ${regex.multiline},
  caseSensitive: ${!regex.ignoreCase},
  dotAll: ${regex.dotAll},
);`;
}

export function generateEmojiGroupEnum(groups: string[]): string {
  const formatted = groups.map((v) => toCamelCase(v));
  const str = formatted.join(",\n  ");
  return `enum ${DartType.emojiGroup} {
  ${str.trimEnd()},
}`;
}

export function generateEmojiRecordType(fields: Fields): string {
  var fieldStr = "";
  for (const [_, value] of Object.entries(fields)) {
    fieldStr += `  ${value.dartType}${value.required ? "" : "?"} ${value.formattedName},\n`;
  }

  return `typedef Emoji = ({
${fieldStr}});`;
}

export function generateEmojiInstance(
  fields: Fields,
  data: GenericObject
): string {
  var str = "";

  for (const [key, field] of Object.entries(fields)) {
    var value = data[key];

    switch (field.dartType) {
      case DartType.string:
        value = JSON.stringify(value);
        break;
      case DartType.emojiGroup:
        value = `${DartType.emojiGroup}.${toCamelCase(value)}`;
        break;
      case DartType.list:
        if (value == undefined || value == null || value.length == 0) {
          value = `[]`;
        } else {
          value = `[${(value as string[]).map((v) => JSON.stringify(v))},]`;
        }
        break;
    }

    str += `    ${field.formattedName}: ${value == undefined? null: value},\n`;
  }

  return `"${data["char"]}": (
${str}  )`;
}

export function generateEmojiList(
  fields: Fields,
  emojis: GenericObject
): string {
  var str = "";

  for (const [key, value] of Object.entries(emojis)) {
    str += `  ${generateEmojiInstance(fields, value)},\n`;
  }

  return `final allEmojis = <String, Emoji>{
${str}
  };`;
}
