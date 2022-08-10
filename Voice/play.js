module.exports = {


  name: "play",
  $if: "v4", //enabling pseudo $if
  code: `
    $sendmessage[сделал]
    $playTrack[youtube;$message]


    $if[$hasPlayer==false]
        $joinVc[$authorid]
    $endif
   $sendmessage[Подождите]
    `,
};