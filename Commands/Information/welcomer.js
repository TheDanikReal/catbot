module.exports = ({
    name: "welcomer",
    type: "OnJoin (waiting for support to answer which type i need to type here because its not documented)",
    code: `$onlyif[$getservervar[enabledwelcomer]==true]
    $sendmessage[Hello $mention!]`
})