const todo = document.querySelector("input");
const btn = document.querySelector(".Insert > button");
const ul = document.getElementById('notcompletedul');
const ul1 = document.getElementById('completedul');




btn.addEventListener("click", (e)=>{
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    const li1 = document.createElement("li");
    if(todo.value !== '')
    {   
        console.log(todo.value);
        
        li1.innerHTML= todo.value;
        btn1.innerHTML = 'D';
        btn2.innerHTML = 'C';
        ul.appendChild(li1);
        li1.appendChild(btn1);
        li1.appendChild(btn2);
        todo.value=''
    
    }
    btn2.addEventListener('click',(e)=>{
        const li3 = document.createElement("li");
        li3.innerHTML = li1.innerHTML;
        console.log(li1.innerHTML)
        const btn3 = document.createElement("button")
        btn3.className = 'btn';
        btn3.innerHTML = 'D'
        li3.appendChild(btn3);
        ul1.appendChild(li3);
        li1.remove();

        btn3.addEventListener('click', (e)=>{
            li3.remove();
        })
    })
    
    btn1.addEventListener('click', (e)=>{
        li1.remove();
    
        
    })
})

