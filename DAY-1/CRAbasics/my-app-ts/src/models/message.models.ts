export class MessageModel {
  constructor(
    public msg: string,
    public to: string,
    public from: string,
    public imageUrl: string,
  ) {}
}
