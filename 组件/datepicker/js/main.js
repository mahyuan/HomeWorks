

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

	for(var j = 0; j<lastDay.getDate() -firstDay.getDate() + 1; j++){
		var d = new Date(firstDay.getTime() + j*24*60*60*1000);
		dateArr.push({type:'cur', date:d})
	}

	this.$datepicker.find('.header-date').text(this.watchDate.getFullYear()+ '年'+(this.watchDate.getMonth()+1)+'月');

	var tpl = '';
	for(var i = 0; i<dateArr.length; i++){
		if(i%7 === 0){
			tpl = '<tr>' + tpl;
		}

		tpl += '<td class="';
		
		if(dateArr[i].type ==='pre'){
			tpl += 'pre-month';
		}else if(dateArr[i].type === 'cur'){
			tpl += 'cur-month';
		}else{
			tpl += 'next-month';
		}


		if(this.getYYMMDD(this.date) === this.getYYMMDD(dateArr[i].date)){
			tpl += 'cur-date';
		}
		tpl += '"';
		tpl += ' date-date="' + this.getYYMMDD(dateArr[i].date) + '">';
		tpl += this.toFixed( dateArr[i].date.getDate()) + '</td>';

		if(i%7 ===6){
			tpl = tpl + '</tr>';
		}
	}
	this.$datepicker.find('tbody').html(tpl);
}

DatePick.prototype.bind = function(){

}
var datepick = new datepick($('#date-start'))

