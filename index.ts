// See https://github.com/x7y62/x7y62

class User {
  // Private info
  private name: string;
  private age: number;

  // Public info
  public username: string;
  public lang: string[];
  public db: string[];
  public misc: string[];

  constructor(name: string, age: number) {
    // Private info
    this.name = name;
    this.age = age;

    // Public info
    this.lang = ["JS", "TS", "HTML", "CSS", "WASM", "Rust", "C++", "C"];
    this.db = ["MongoDB", "SQLite3"];
    this.misc = ["Git", "GitHub", "GNU", "NodeJS", "Deno"];
  }

  // Get name
  public get __name__(): string {
    return this.name;
  }

  // Get age
  public get __age__(): number {
    return this.age;
  }
}