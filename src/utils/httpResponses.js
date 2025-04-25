export const HTTP_RESPONSES = {
  ok: parseInt(process.env.HTTP_OK), // 200
  created: parseInt(process.env.HTTP_CREATED), // 201
  badRequest: parseInt(process.env.BAD_REQUEST), // 400
  unauthorized: parseInt(process.env.HTTP_UNAUTHORIZED), // 401
  notFound: parseInt(process.env.HTTP_NOT_FOUND), // 404
  noContent: parseInt(process.env.HTTP_NO_CONTENT), // 204
  serverError: parseInt(process.env.HTTP_INTERNAL_SERVER_ERROR), // 500
};
