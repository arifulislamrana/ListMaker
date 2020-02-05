var form = document.querySelector('form');
var ul = document.querySelector('ul');
var filter = document.getElementById('filter');

form.addEventListener('submit',additem);
ul.addEventListener('click',remove);
filter.addEventListener('keyup', search);

function additem(e){

    e.preventDefault();
    var item = document.getElementById('input').value;

    if(item.length>0){
        var li = document.createElement('li');
        li.className='list';
        var x = document.createElement('button');
        x.className='xbtn';
        x.innerHTML='delete';
        li.appendChild(document.createTextNode(item));
        li.appendChild(x);
        ul.appendChild(li);
    }
}


function remove(e){
    
    if(e.target.classList.contains('xbtn')){
        if(confirm('are you sure?')){
            var li = e.target.parentElement;
            ul.removeChild(li);
        }
    }
}

function search(e){

    var txt = e.target.value.toLowerCase();
    var lis = ul.getElementsByTagName('li');
    
    Array.from(lis).forEach(function(li){
        var itemname=li.firstChild.textContent;
        if(itemname.toLowerCase().indexOf(txt)!=-1){
            li.style.display ='block';
        }else{
            li.style.display='none';
        }
    });
}