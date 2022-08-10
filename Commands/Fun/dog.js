module.exports = ({
    name: "dog",
    code: `$color[RANDOM]
    $sendmessage[$title[Готово] $description[А вот и собака] $image[$jsonrequest[https://dog.ceo/api/breeds/image/random;message]]]`
})
