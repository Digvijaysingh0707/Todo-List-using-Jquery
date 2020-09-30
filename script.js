let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnClear = $('#btnClear')
let inpnewTask = $('#inpnewTask')

function addItem(){
    let listItem = $('<li>',{
        'class': 'list-group-item',
        text: inpnewTask.val() 
    })
    listItem.click((event) => {
        // console.log("clicked",$(event.target))
        listItem.toggleClass('done')
    })
    ulTasks.append(listItem)
    // console.log(inpnewTask.val())
    inpnewTask.val('')

}
inpnewTask.keypress((e) => {
    if(e.which ===13)addItem()
})

btnAdd.click(addItem)
btnClear.click(() => inpnewTask.val(''))