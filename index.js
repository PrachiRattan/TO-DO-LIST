let add=document.getElementById('add_click');
        add.addEventListener('click',addElement);
        let parentList=document.getElementById('parentList');
        function addElement(e){
            if(parentList.children[0].className=="emptyMssg"){
                parentList.children[0].remove();
            }
        
            let currentBtn=e.currentTarget;
            let currentInput=currentBtn.previousElementSibling;
            let Input=currentInput.value;
            let newLi=document.createElement('li');
            newLi.className="list-group-item d-flex justify-content-between text";
            newLi.innerHTML=`<p class="flex-grow-1">${Input}</p>
                <button class="btn btn-light text-black mx-2" onclick="edit(this)">Edit</button>
                <button class="btn btn-dark text-light" onclick="remove(this)">Remove</button></li>`;
            parentList.appendChild(newLi);
            }
            function remove(currentElement){
                currentElement.parentElement.remove();
                if(parentList.children.length<=0){
                    let newMssg=document.createElement("h3");
                    newMssg.classList.add('emptyMssg');
                    newMssg.textContent="Nothing Present";
                    parentList.append(newMssg);
                }
            }
            function edit(currentElement){
                if(currentElement.textContent=="Done"){
                    currentElement.textContent="Edit";
                    let newCurrentElement=currentElement.previousElementSibling.value;
                    let currentHeading=document.createElement('p');
                    currentHeading.className="flex-grow-1";
                    currentHeading.textContent=newCurrentElement;
                    currentElement.parentElement.replaceChild(currentHeading,currentElement.previousElementSibling);

                }
                else{
                currentElement.textContent="Done";
                let newCurrentElement=currentElement.previousElementSibling.textContent;
                let currentInput=document.createElement('input');
                currentInput.type="text";
                currentInput.className="form-control btn btn-light";
                currentInput.placeholder="Enter Text";
                currentInput.value=newCurrentElement;

               currentElement.parentElement.replaceChild(currentInput,currentElement.previousElementSibling)
                }
            }