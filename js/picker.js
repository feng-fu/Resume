$.fn.colorPicker = function() {
  var self = this;
  var $li = self.find("li");
  var $picker = self.find(".picker");
  $picker.on("click", function() {
    if (self.css("right") !== "0px") {
      self.css("right", 0);
    } else {
      self.css("right", -144);
    }
  });
  $li.on("click", function() {
    var $this = $(this);
    var classname = "theme-" + ($this.index() + 1);
    var name = findClass();
    if(name === classname) return;
    $this.siblings().removeClass('active');
    $this.addClass('active');
    $("header").removeClass(name).addClass(classname);
    $(".topbar>.hire>a").removeClass(name).addClass(classname);
    $("header>.topbar").removeClass(name).addClass(classname);
    $("header>.contact").removeClass(name).addClass(classname);
    $("#top").removeClass(name).addClass(classname);
    $("nav").removeClass(name).addClass(classname);
    $("main>#skill .progress").removeClass(name).addClass(classname);
    $("main>#info ul>li>a").removeClass(name).addClass(classname);
    $("main #portfolio>ul>li .list>.btn-group>a").removeClass(name).addClass(classname);
  })
  function findClass(){
    var $header = $("header");
    for(var i = 1;i < 10;i++){
      var name = "theme-" + i;
      if($header.hasClass(name)){
        return name;
      }
    }
  }
}
$("#color-picker").colorPicker();