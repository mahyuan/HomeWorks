


var Music = function(){
	this.init()
	this.bind()
}

prot.init = function(){
	this.login = document.querySelector('#loginbtn')
	this.avatar = document.querySelector('#avatar')
	this.volume = document.querySelector('volumn')

	this.thumb = document.querySelector('#Thumb-btn')
	this.collect = document.querySelector('#collect-btn')
	this.load = document.querySelector('#load-btn')
	this.review = document.querySelector('#review-btn')
	this.loop = document.querySelector('#loop')

	this.preplay = document.querySelector('#presplay')
	this.nextplay = document.querySelector('#nextplay')
	this.pause = document.querySelector('#pause')
	this.list = document.querySelector('$listshow')

	this.perc = document.querySelector('#perc')

}
var prot =  Music.prototype
prot.init = function(){

}
