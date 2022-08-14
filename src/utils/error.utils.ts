export class ApiError extends Error {
  public code: number
  public message: string

  constructor(code: number, message: string) {
    super(message)
    this.code = code
    this.message = message
  }

  static internal(message: string = 'something went worng') {
    return new ApiError(500, message)
  }

  static notFound(message: string = 'resource not found') {
    return new ApiError(400, message)
  }

  static badRequest(message: string = 'invalid request') {
    return new ApiError(400, message)
  }

  static invalidId(message: string = 'invalid id') {
    return new ApiError(400, message)
  }

  static authentication(message: string = 'authentication required') {
    return new ApiError(401, message)
  }

  static authorization(message: string = 'insufficient permissions') {
    return new ApiError(401, message)
  }

  static validation(message: string = 'invalid user input') {
    return new ApiError(422, message)
  }

  //   static invalidUsername(original: object) {
  //     const { error } = invalidUsernameSchemaError.validate(original)
  //     return error
  //   }

  //   static invalidPassword(original: object) {
  //     const { error } = invalidPasswordSchemaError.validate(original)
  //     return error
  //   }
}
