//pub/sub 范例
var Event = (function(){
    var events = {};
    function on(evt, handler){
        events[evt] = events[evt] || [];
        events[evt].push({
            handler: handler
        })
    }
    function fire(evt, arg){
        if(!events[evt]){
            return;
        }
        for(var i=0; i<events[evt].length; i++){
            events[evt][i].handler(arg);
        }
    }
    function off(evt){
        delete events[evt]
    }
    return {
        on: on,
        fire: fire,
        off: off
    }
})()
Event.on('change', function(val){
    console.log('change...  now val is ' + val);
});
Event.fire('change', '饥人谷');
Event.off('changer');