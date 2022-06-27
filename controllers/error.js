exports.get400 = (req, res, next) => {
  res.status(400).render('errors/400');
}

exports.get404 = (req, res, next) => {
  res.status(404).render('errors/404');
}

exports.get408 = (req, res, next) => {
  res.status(408).render('errors/408');
}

exports.get409 = (req, res, next) => {
  res.status(409).render('errors/409');
}
