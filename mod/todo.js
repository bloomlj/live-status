  
  var todomod = {};

  todomod.init = function(){
    todomod.data =[{person : '刘永中',thing : "云平台建设",startdate:"2012年11月14日",enddate:"2012年11月18日"},
    {person : '罗桓',thing : "研究某某架构",startdate:"2012年11月14日",enddate:"2012年11月18日"},
    {person : '刘永中',thing : "制作某某页面",startdate:"2012年11月14日",enddate:"2012年11月18日"},
    {person : '刘永中',thing : "制作某某页面",startdate:"2012年11月14日",enddate:"2012年11月18日"}
    ];

    todomod.data.startedtime = 0;
    //1000*60*2 is 2 min
    todomod.data.intervel = 1000*60*2;
    todomod.intervel_id = '';
    }

  
  todomod.render = function(){

    todomod.data.startedtime += todomod.data.intervel / (1000*60);

    var compiledtpl = _.template($("#todo-tpl").text());
    var htmlstr = compiledtpl({"todo":todomod.data});
    $("#todo").html(htmlstr);
    $("#todo .inner").show('slow');
  } 

  todomod.start = function(){
    //start first
    todomod.render();
    //reflash
    var intervel = todomod.data.intervel;
    todomod.intervel_id = setInterval(todomod.render, intervel);
  }

  todomod.stop = function(){
    clearInterval(todomod.intervel_id);
  }




