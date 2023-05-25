/**
 * * messages interface <contract>
 */

enum Role {
  bot = "bot",
  user = "user",
}

export interface IMessages {
  id: number;
  title: string;
  role: Role;
  content: string;
}
