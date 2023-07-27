module.exports = ({
    name: "update",
    code: `$setvar[updates;$message] $sendmessage[Успешно!] $onlyif[$authorid==$getvar[owner]]` // Change id to your here too
})