module.exports = ({
  name: "eval",
  code: `
  $onlyif[$authorid==$getvar[owner]; You're not admin!!!!!]

$eval[$message;yes]
`
})
