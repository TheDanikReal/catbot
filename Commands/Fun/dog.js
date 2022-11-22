module.exports = ({
    name: "dog",
    code: `$color[RANDOM]
    $sendmessage[$title[Here is your dog!] $image[$jsonrequest[https://dog.ceo/api/breeds/image/random;message]]]`
})
