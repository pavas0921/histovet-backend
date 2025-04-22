export const HTTP_RESPONSES = {
    ok: (res, data) => res.status(process.env.HTTP_OK).json(data),
    created: (res, data) => res.status(process.env.HTTP_CREATED).json(data),
    badRequest: (res, error) => res.status(process.env.BAD_REQUEST).json({ error }),
    serverError: (res, error) => res.status(process.env.HTTP_INTERNAL_SERVER_ERROR).json({ error }),
    notFound: (res, error) => res.status(process.env.HTTP_NOT_FOUND).json({ error }),
  };