module.exports = ({
  name: "eval",
  code: `
$eval[$message;yes]
$onlyif[$authorid==$getvar[owner]; You're not admin!!!!!]
`
})
