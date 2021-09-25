var myNodeList=document.getElementsByTagName('LI')
var i;
for(i=0;i<myNodeList.length;i++)
{
    var span=document.createElement('SPAN')
    var txt=document.createTextNode('\u00D7');
    span.className='close'
    span.appendChild(txt);
    myNodeList[i].appendChild(span)

}

var close=document.getElementsByClassName('close') //I add this to hide current list when it click close button...
var i



    
     
for(i=0;i<close.length;i++){
    close[i].addEventListener('click', myFunction)
    function myFunction(ob) {
        
         ob.path[1].style.display='none'
    }
}


var list=document.querySelector('ul')
list.addEventListener('click',function(ev){
    if(ev.target.targetName==='LI')
    {
        ev.target.classList.toggle('checked')
    }


    },false)

    function newElement()
    {
        var li=document.createElement('li')
        var inputValue=document.getElementById('item').value
        var t=document.createTextNode(inputValue)
        li.appendChild(t)
        if(inputValue==='')
        {
            alert('this field cannot be empty')
        }
            else
            {
                document.getElementById('list').appendChild(li)
            }
            document.getElementById('item').value=''

            var span = document.createElement('SPAN');
            var txt=document.createTextNode('\u00D7')
            span.className='close'
            span.appendChild(txt)
            li.appendChild(span)
           

            for(i=0;i<close.length;i++){
                close[i].addEventListener('click', myFunction)
                function myFunction(ob) {
                   
                     ob.path[1].style.display='none'
                }
            }


    }
