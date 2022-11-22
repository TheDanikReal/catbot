module.exports = ({
  name: "exec",
  $if: "v4",
  code: `$onlyif[$authorid==802951312873750578] $exec[$message] $log[Команда $message выполняется!!!] $addcmdreactions[✅]  ` //Change id in onlyif to your user id
})
