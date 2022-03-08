// console.log("Hello World");
function update(){
    console.log("Updating List");
    tit = document.getElementById("title").value;
    desc = document.getElementById("description").value;
    if (localStorage.getItem("itemsJSON") == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJSON', JSON.stringify(itemJsonArray))

    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJSON')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJSON', JSON.stringify(itemJsonArray))

    }

    // Populate the Table 
    tableBody = document.getElementById("tableBody")
    let str = ""
    itemJsonArray.forEach((element,index) => {
        str += `

        <tr>
            <th scope="row" class="table-success">${index+1}</th>
            <td class="table-success">${element[0]}</td>
            <td class="table-success">${element[1]}</td>
            <td class="table-success"><button class="btn-primary" onclick="deleted(${index}) ">Delete </button></td>
        </tr>   `
    
    });
    tableBody.innerHTML=str;

}
let add = document.getElementById("add");
add.addEventListener("click",update);
update();
function deleted(itemIndex){
    console.log("Delete",itemIndex);
    itemJsonArrayStr=localStorage.getItem('itemsJson');
    itemJsonArray=JSON.parse(itemJsonArrayStr);
    //Delete Itemindex element from the array 
    itemJsonArray.splice(itemIndex,1);
    localStorage.setItem('itemJson',JSON.stringify(itemJsonArray))
    update();}


