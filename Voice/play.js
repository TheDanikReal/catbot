module.exports = {


  name: "play",
  $if: "v4",
  code: `
    $sendmessage[Успешно зашёл в голосовой канал и начал воспроизведение]
    $playTrack[youtube;$message]


    $if[$hasPlayer==false]
        $joinVc[$authorid]
    $endif
   $sendmessage[Подождите]
    `,
};
