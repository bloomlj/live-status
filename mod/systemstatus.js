  
  var systemstatusmod = {};

  systemstatusmod.init = function(){
    systemstatusmod.data =[{system : '主页',status : "正常"},
    {system : '信息系统',status : "正常"},
    {system : '学习平台',status : "正常"},
    {system : '学生社区',status : "正常"}
    ];

    systemstatusmod.data.startedtime = 0;
    //1000*60*2 is 2 min
    systemstatusmod.data.intervel = 1000*2;
    systemstatusmod.intervel_id = '';
    }

  
  systemstatusmod.render = function(){

    systemstatusmod.data.startedtime += systemstatusmod.data.intervel / (1000*60);

    var compiledtpl = _.template($("#systemstatus-tpl").text());
    var htmlstr = compiledtpl({"systemstatus":systemstatusmod.data});
    $("#systemstatus").html(htmlstr);
    $("#systemstatus .inner").show('slow');
  } 

  systemstatusmod.start = function(){
    //start first
    systemstatusmod.render();
    //reflash
    var intervel = systemstatusmod.data.intervel;
    systemstatusmod.intervel_id = setInterval(systemstatusmod.render, intervel);
  }

  systemstatusmod.stop = function(){
    clearInterval(systemstatusmod.intervel_id);
  }




