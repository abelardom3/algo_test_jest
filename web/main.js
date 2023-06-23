const textValue = document.getElementById('text-box')
const addBtn = document.getElementById('btn')
const listContainer = document.getElementById('container')
const textContainer = document.getElementById('add-container')

let newValue = ''
let showingError = false
let dataArray = []

runData()

function runData() {
    const data = localStorage.getItem('Data')
    console.log('hit = 0')
    if (!data) {
        localStorage.setItem('Data', '[]')
    } else {
        let storedData = localStorage.getItem('Data')
        let arrData = JSON.parse(storedData)
        console.log('hit = 1')
        if (dataArray.length === 0) {
            dataArray = arrData
            console.log('hit = 2')
            runStoredData(dataArray)
        }
    }
}


textValue.addEventListener('change', (e) => {
    newValue = e.target.value
})

addBtn.addEventListener('click', () => {
    if (newValue === '') {
        runError()
    } else {
        addNewItem()
        removeError()

    }
})





function runStoredData(data) {
    data.forEach((list, id) => {
        const div = document.createElement('div')
        div.className = 'list-div'
        const listItem = document.createElement('li')
        listItem.innerText = list
        listItem.id = id
        listItem.className = 'list-item'
        div.append(listItem)
        addDelete(div, id)
        listContainer.prepend(div)
    })

}


function addNewItem() {
    const div = document.createElement('div')
    div.className = 'list-div'
    let newItem = document.createElement("li")
    newItem.innerText = newValue
    newItem.id = dataArray.length
    newItem.className = 'list-item'
    div.append(newItem)
    addDelete(div, dataArray.length)
    listContainer.prepend(div)
    dataArray.push(newValue)
    localStorage.setItem('Data', JSON.stringify(dataArray))
    newValue = ''
    textValue.value = ''
}



function addDelete(div, id) {
    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Delete'
    deleteBtn.className = 'deleteBtn'
    deleteBtn.id = id
    deleteBtn.addEventListener('click', (e) => {
        let index = e.target.id
        dataArray.splice(index, 1)
        localStorage.setItem('Data', JSON.stringify(dataArray))
        runData()
        console.log(dataArray)
    })
    div.append(deleteBtn)
}




function runError() {

    if (!showingError) {
        let errorMsg = document.createElement("p")
        errorMsg.innerText = "Required"
        errorMsg.id = 'error'
        textContainer.append(errorMsg)
        showingError = true
    }
}

function removeError() {

    let error = document.getElementById('error')
    if (showingError) {
        error.remove()
        showingError = false
    }
}