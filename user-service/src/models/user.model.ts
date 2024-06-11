export class User {
  constructor(
    private readonly name: string,
    private readonly email: string,
    private readonly password: string,
    private readonly id?: string
  ) {}
}
