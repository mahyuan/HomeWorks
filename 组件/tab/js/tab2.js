
//数据模型
var baseConfig = {
    tabList:[
        {
            tabname: 'tab1',
            tabContent: '渲染tab1'
        },
        {
            tabname: 'tab2',
            tabContent: '渲染tab2'
        },
        {
            tabname: 'tab3',
            tabContent: '渲染tab3'
        }
    ],
    indexTab:0
};

var TabFactory = function(tabConfig){
    //es6方法，后面的参数一次覆盖前面的参数
    this.tabConfig = Object.assign({}, baseConfig, tabConfig);
    //高亮的是哪一个
	this.activeIndex =this.tabConfig.indexTab;
   
};

//渲染
TabFactory.prototype.render = function(container){
    var tabList = this.tabConfig['tabList']
    //渲染头部
    var headerHtml = tabList.map(function(tab){
        var tabname = tab.tabname;
        return [
        '<div class="tab-item" >', 
        tabname,
        '</div>'].join('')
    }).join('');
    var bodyHtml = '<div class="tab-body"></div>';
    var finalHtml = [
        '<div class="tab-container">',
        headerHtml,
        '</div>',
        bodyHtml
    ].join('');
    //渲染内容区
    container.innerHTML = finalHtml;
    // 处理首屏渲染
    this.renderStyle(this.activeIndex)
    //挂载事件
    this.addEvent()

}
// TabFactory.prototype.click = function(){

// }
TabFactory.prototype.renderStyle = function(index, boolean){
 
    var tabDomList = document.querySelectorAll('.tab-item');
    var tabBodyContainer = document.querySelectorAll('.tab-body')[0];
    var tabItem = tabDomList[index];
    tabDomList[this.activeIndex].classList.remove('active');
    tabItem.classList.add('active');
    tabBodyContainer.innerHTML = this.tabConfig.tabList[index].tabContent

}
TabFactory.prototype.addEvent = function(){
	var that = this
    var tabDomList = document.querySelectorAll('.tab-item');
    //将类数组的对象转换为数组
    
    [].slice.call(tabDomList).forEach(function(tabItem, index){
        tabItem.addEventListener('click', function(){
            if(index == this.activeIndex){
                return;
            }
            that.renderStyle(index);
            that.activeIndex = index;
        })
    })

}
var container = document.getElementById('root');
var tabInstance = new TabFactory({});
tabInstance.render(container)
