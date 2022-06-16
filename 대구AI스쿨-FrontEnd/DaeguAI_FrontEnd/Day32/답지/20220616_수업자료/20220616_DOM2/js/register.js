function newRegister(){
    // 1. 새로운P요소 만들기
    var newP = document.createElement("P");

    //2. 텍스트 노드 만들기
    var userName = document.querySelector("#userName");
    var newText = document.createTextNode(userName.value);

    //3. 텍스트 노드를 P요소에 append
    newP.appendChild(newText);

    //4. nameList에 자식요소로 P요소를  append
    var nameList = document.querySelector("#nameList");
    // nameList.appendChild(newP);
    nameList.insertBefore(newP, nameList.childNodes[0]); //최근이름이 위로 오도록 변경(14라인 대신)
    userName.value = "";

    //5. 삭제를 위해서  X  를 만든다 .
    var delBttn = document.createElement("span");
    var delText = document.createTextNode("X");
    delBttn.setAttribute("class", "del");
    delBttn.appendChild(delText);
    newP.appendChild(delBttn);

    //6. 실제로 삭제를 한다. 
    var removeBttns = document.querySelectorAll(".del");
    for (var i=0; i < removeBttns.length; i++){
        removeBttns[i].addEventListener("click", function(){
            if(this.parentNode.parentNode){//현재 노드(this)의 부모노드의 부모노드가 있을 경우 실행 
                this.parentNode.parentNode.removeChild(this.parentNode);
                //현재노드(this)의 부모 노드의 부모 노드를 찾아서 '현재 노드(this)의 부모 노드(p)를 삭제
            } 
        });
    }
}