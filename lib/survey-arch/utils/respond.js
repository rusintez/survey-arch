module.exports = function(req, res, next) {
  return function(err, result) {
    if (err) return next(err);
    res.json(result);
  }
}