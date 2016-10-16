function Top($node){
  this.node = $node;
  this.node.data("show",false);
  this.scroll();
  this.bind();
}
Top.prototype.bind = function(){
  var self = this;
  var $document = $(document);
  $document.on("scroll",function(){
    self.scroll();
  });
  this.node.on("click",function(){
    $("html,body").animate({scrollTop:0},$(document).scrollTop()/2)
  })
}
Top.prototype.scroll = function(){
  var $document = $(document);
  if(!this.node.data("show") && $document.scrollTop() > 200){

    this.node.show();
    this.node.data("show",true);
  }
  if(this.node.data("show") && $document.scrollTop() < 200){
    this.node.hide();
    this.node.data("show",false);
  }
}
new Top($("#top"))