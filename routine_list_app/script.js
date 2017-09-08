// Code goes here
function routineList(){

    routines=[];


$( ".addRoutine" ).click(function(){
  var routine = $('#routine').val();
  var newRoutine = new Routine(routine);
   routines.push(newRoutine);
   addRoutine();
  
   
  
});



    function Routine (name){
      this.name = name;
    }
    


    
    
    function addRoutine(){
      
      var counter =  routines.length - 1;
      var lastRoutine = routines[counter].name;
      var routineLetter = lastRoutine[0];
      var stepValue = "#" + routineLetter + counter;
      var stepList = "." + routineLetter + counter;
      var stepButton = '<div class="input-group col-sm-7"><input id="'+ routineLetter + counter + '" type="text" class="form-control" placeholder="Type a Step in the routine here"><span class="input-group-btn"><button class="btn btn-secondary addStep" type="button">Add Step</button></span></div>';
      $(".routines").append('<li>'+'<p class= "coolText">' +lastRoutine + '</p>' +'<ul class=' +'"' + routineLetter + counter + '"' +   '>' +  '</ul>'+ stepButton + '</li>');
       $(".addStep").click(function(){
        
        var step = $(stepValue).val();
        $(stepList).append('<li class="coolSteps">'+ step  +'</li>');
        $(stepValue).val("");
      });
      $('#routine').val("");
    }
    
        

    


  
}



   

