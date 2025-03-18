import { DartType } from "./types";

export function toCamelCase(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

export function toDartType(key: string, value: any): DartType {
  switch (typeof value) {
    case "string":
      if (key === "group") {
        return DartType.emojiGroup;
      } else if (isNaN(Number(value))) {
        return DartType.string;
      } else {
        return DartType.double;
      }
    case "boolean":
      return DartType.bool;
    case "number":
      return DartType.double;
    case "object": {
      if (Array.isArray(value)) {
        return DartType.list;
      } else {
        console.log(value);
        throw Error(`Unsupported type of ${typeof value}`);
      }
    }
    default: {
      console.log(value);
      throw Error(`Unsupported type of ${typeof value}`);
    }
  }
}
