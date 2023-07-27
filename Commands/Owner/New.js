module.exports = ({
  name: "newslash",
  code: `$createapplicationcommand[global;$message[1];$messageslice[2;12];;slash]
$onlyif[$authorid==$getvar[owner]]`
})
