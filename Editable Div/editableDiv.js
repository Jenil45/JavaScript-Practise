console.log("This is editable div");
var divelement = document.getElementsByClassName('divElem'); 
console.log(divelement[0]);
divelement[0].addEventListener('click' , function() {

    let notextarea = document.getElementsByClassName('textarea').length;
    let html1 = divelement[0].innerHTML;
    if(notextarea == 0)
    {
        divelement[0].innerHTML = `<textarea name="" id="" cols="50" rows="4" class="textarea" style="padding : 12px; font-size:20px">${html1}</textarea>`;
    }

    let btn = document.getElementsByClassName('btn');
    btn[0].addEventListener('click' , function(){
        let textarea  = document.getElementsByClassName('textarea');
        divelement[0].innerHTML = textarea[0].value;
    })    


}); 
