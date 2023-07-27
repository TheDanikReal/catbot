module.exports = ({
  name: "exec",
  code: `$onlyif[$authorid==$getvar[owner]; You're not owner!]
$exec[$message]
$log[Command $message is executing!] 
$addcmdreactions[✅]  `
})
