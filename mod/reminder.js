  
  var remindermod = {};

  remindermod.init = function(){
    remindermod.reminders =[{time : '2012.11.14 9:00',action : "开会"},
    {time : '2012.11.14 9:00',action : "开会"},
    {time : '2012.11.14 9:00',action : "开会"},
    {time : '2012.11.14 9:00',action : "开会"}
    ];

    remindermod.reminders.startedtime = 0;
    //1000*60*2 is 2 min
    remindermod.reminders.intervel = 1000*2;
    remindermod.intervel_id = '';
    }

  
  remindermod.reminder_render = function(){

    remindermod.reminders.startedtime += remindermod.reminders.intervel / (1000*60);

    var compiledtpl = _.template($("#reminder-tpl").text());
    var htmlstr = compiledtpl({"reminders":remindermod.reminders});
    $("#reminder").html(htmlstr);
    $("#reminder .inner").show('slow');

  } 

  remindermod.start = function(){
    //start first
    remindermod.reminder_render();
    //reflash
    var intervel = remindermod.reminders.intervel;
    remindermod.intervel_id = setInterval(remindermod.reminder_render, intervel);
  }

  remindermod.stop = function(){
    clearInterval(remindermod.intervel_id);
  }




