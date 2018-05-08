// 方法1 面向对象 jquery方式

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


// 方法2 面向对象 原生js方式

function Tab(ct){
    this.ct = ct;
    this.init();
    this.bind();       
}

Tab.prototype.init = function(){
    this.tabLis = this.ct.querySelectorAll('.tab-header>li');
    this.tabPanels = this.ct.querySelectorAll('.tab-container>li');
}

Tab.prototype.bind = function(){
    var that = this;
    this.tabLis.forEach(function(tabli){
        var target = e.target;
        var index = [].indexOf.call(that.tabLis, target);
        that.tabLis.forEach(function(li){
            li.classList.remove('active');
        });
        target.classList.add('active');

        that.tabPanels.forEach(function(panel){
            panel.classList.remove('active')
        });
        that.tabPanels[index].classList.add('active')       
    })
}

var tab1 = new Tab(document.querySelectorAll('.tab')[0])
var tab2 = new Tab(document.querySelectorAll('.tab')[1])


// 方法3 面向对象 原生js方式  拼接html
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