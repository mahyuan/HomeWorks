

function DatePick($target){
    //初始化当前日期
    this.init($target)

    // 渲染日历模板
    this.render()

    // 设置模板里面的数据
    this.setDate()

    // 绑定事件
    this.bind()

}

DatePick.prototype.init = function($target){
    this.target = $target
    if(this.isValidDate($target.attr('date-init'))){
        //当前日期或者指定的要展示的日期
        this.date = new Date($target.attr('date-init'))
        //用户在切换月份时所看到的日期,初始为当前日期
        this.watchDate = new Date($target.attr('date-init'))
    }else{
        this.date = new Date()
        this.watchDate = new Date()
    }
}

DatePick.prototype.render = function() {
    var tpl = '<div class="ui-date-picker" style="display:none">'
        + '<div class="header"><span class="pre caret-left"></span><span class="cur header-date"></span><span class="next caret-right"></span></div>'
        + '<table class="panel">'
        + '<thead><tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr></thead>'
        + '<tbody></tbody>'
        + '</div>';
    this.$datepicker = $(tpl);
    this.$datepicker.insertAfter(this.$target)
        .css({
            'position': 'absolute',
            'left': this.$target.offset().left,
            'top': this.$target.offset().top + this.$target.height(true)
        })
}
DatePick.prototype.setDate = function(){
    this.$datepicker.find('tbody').html('')

    var firstDay = this.getFirstDay(this.watchDate),
        lastDay = this.getLastDay(this.watchDate);
    var dateArr = [];

    for (var i = firstDay.getDay(); i > 0; i--){
        var d = new Date(firstDay.getTime() - i*24*60*60*1000);
        dateArr.push({type: 'pre', date:d })
    }


}

DatePick.prototype.bind = function(){

}


var datepick = new datepick($('#date-start'))


























