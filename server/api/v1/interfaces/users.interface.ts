/**
 * * users interface <contract>
 */

export interface Users {
  user: string;
  password: string;
  roles: [string];
  company: string;
  active: boolean;
}
