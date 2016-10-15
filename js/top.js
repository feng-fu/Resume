function Top($node){
  this.node = $node;
  this.node.data("show",false);
  this.bind();
}
Top.prototype.bind = function(){
  var self = this;
  var $document = $(document);
  $document.on("scroll",function(){
    if(!self.node.data("show") && $document.scrollTop() > 200){

      self.node.show();
      self.node.data("show",true);
    }
    if(self.node.data("show") && $document.scrollTop() < 200){
      self.node.hide();
      self.node.data("show",false);
    }
  });
  this.node.on("click",function(){
    $("html,body").animate({scrollTop:0},$(document).scrollTop()/2)
  })
}
new Top($("#top"))