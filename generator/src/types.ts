export enum DartType {
  string = "String",
  emojiGroup = "EmojiGroup",
  double = "double",
  bool = "bool",
  list = "List<String>",
}

export type Fields = {
  [key: string]: {
    formattedName: string;
    dartType: DartType;
    required: boolean;
  };
};

export type GenericObject = { [key: string]: any };
