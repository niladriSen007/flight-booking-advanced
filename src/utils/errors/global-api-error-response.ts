export class GlobalErrorResponse extends Error {

  private readonly statusCode: number;
  private readonly explanation: string

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.explanation = message;
  }
}
