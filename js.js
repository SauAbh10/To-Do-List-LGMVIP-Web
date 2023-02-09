document.querySelector('#add').onclick = function(){
    if(document.querySelector('#item input').value.length == 0){
    alert("Please Enter a task")
    }
    else{
        document.querySelector('#tasks').innerHTML +=`
        <div class="task">
        <div id="item">
        ${document.querySelector("#item input").value}
        </div>
        <button class="delete">
        <i class="far fa-trash-alt"></i>
        </button>
        </div>
        `;

        var a =document.querySelectorAll(".delete");
        for(var i=0; i<a.length;i++){
            a[i].onclick=function(){
                this.parentNode.remove();
            }
        }

        
    }
}