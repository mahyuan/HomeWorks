(function(){
    const HOST = 'https://weixin.jirengu.com/weather';
    let myLocation;
    $.ajax(`${HOST}/weather/`)
        .done((info)=>{
            console.log(info)

        })
})();