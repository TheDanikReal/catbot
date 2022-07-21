module.exports = ({
  name: "exec",
  $if: "v4",
  code: `$exec[$message] $log[Команда $message выполняется!!!] $sendmessage[Выполняю] $onlyif[$authorid==802951312873750578] ` //Change id in onlyif to your user id
})