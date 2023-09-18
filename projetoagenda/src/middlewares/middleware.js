exports.meuMiddleware = (req, res, next) => {
  res.locals.umaVariavelLocao = 'Está é uma variável local.'
  next()
}

exports.checkCsrfError = (req, res, next, err) => {
  if (err) {
    return res.render('404')
  }

  next()
}

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};
