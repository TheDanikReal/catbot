module.exports = ({
    name: "welcomer",
    type: "onJoin",
    code: `$onlyif[$getservervar[enabledwelcomer]==true]
    $sendmessage[Hello $mention!]`
})
