const { dbInit } = require('../models/dbInit')

module.exports = async function getJurisdictionContactInfos(req, res) {
  let jurisdiction_id = req.query.jurisdiction_id;
  let jurisdiction_contact_infos = Object.create(null);

  //INSERT YOUR CODE HERE
  return res.json({
    jurisdiction_contact_infos
  })
}
