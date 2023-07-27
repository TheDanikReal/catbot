module.exports = ({
  name: "exec",
  code: `
$exec[$message]
$log[Command $message is executing!] 
$addcmdreactions[✅]
$onlyif[$authorid==$getvar[owner]; You're not owner!]`
})
