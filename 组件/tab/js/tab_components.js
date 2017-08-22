var Tab = function(headerDom, bodyDom){
    this.headerDom = headerDom.find('li')
    this.bodyDom = bodyDom.find('li')
    this.addEvent()
}
Tab.prototype.addEvent = function(){
    var that = this
    this.headerDom.on('click', function(){
        //this指向headerDom
        var index = $(this).data('index')
        that.highLight(index)
        that.bodySwith(index)
    })
}
Tab.prototype.highLight = function(index){
    var headerLi = this.headerDom
    headerLi.removeClass('active')
    headerLi.eq(index).addClass('active')
}
Tab.prototype.bodySwith = function(index){
    var bodyLi = this.bodyDom
    bodyLi.removeClass('active')
    bodyLi.eq(index).addClass('active')
    //eq()从0开始取
}
new Tab($('.tab-header'), $('.tab-body'))
