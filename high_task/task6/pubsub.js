var EventCenter = (function(){
    var events = {};
    function on(evt, handler){
        events[evt] = events[evt] || [];
        events[evt].push({
            handler: handler
        });
    }

    function fire(evt, args){
        if(!events[evt]){
            return;
        }
        for(var i = 0; i < events[evt].length; i ++){
            events[evt][i].handler(args);
        }
    }

    function off(name){
        delete events[name]
    }

    return {
        on: on,
        fire: fire,
        off: off
    }
})()


//发布订阅模式， 处理异步模式非常便利

EventCenter.on('mu_event', function(date){
    console.log('my_event received...');
});
EventCenter.on('my_event', function(date){
    console.log('my_event2 received...');
});
EventCenter.fire('my_event');