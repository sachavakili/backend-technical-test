const { dbInit } = require('../models/dbInit')

module.exports = async function getDecision(req, res) {
  let doc_id = req.query.doc_id;
  let decision = Object.create(null);

  //INSERT YOUR CODE HERE
  return res.json({
    decision
  })
}
