$('aside .hasSc').click(function(){if($(this).next().hasClass('sc')) 
$(this).next().stop(true,true).slideToggle(200);});