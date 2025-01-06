let tasks = JSON.parse(localStorage.getItem('tasks')) || []
let resultElement =  document.querySelector('#result')

renderTask(tasks)

function renderTask(array) {
    resultElement.innerHTML = ''
    array.forEach( (item)=>{
        let divElement = document.createElement('div')
        divElement.className = 'task-wrapper'
        divElement.innerHTML +=  `
                                <input type="checkbox" ${item.isCompleted ? 'checked' : ''}>
                                <h1 class="${ item.isCompleted ? 'completed' : ''}">${item.name}</h1>
                                <div >
                                    <button>Delete</button>
                                </div>
                                    `
        divElement.querySelector('input').addEventListener('change',()=>{ 
            toggleComplete(item.id)
        })
        divElement.querySelector('button').addEventListener('click',()=>{
            deleteTask(item.id)
        })
        resultElement.appendChild(divElement)
    })
}

document.querySelector('#addBtn').addEventListener('click',()=>{
    let value = document.querySelector('#taskInput').value
    let task = { id:Date.now(),name:value,isCompleted:false}
    tasks.unshift(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    renderTask(tasks)
})
function deleteTask(id) { tasks=tasks.filter( item => {
            return item.id != id
        })
        localStorage.setItem('tasks',JSON.stringify(tasks))
        renderTask(tasks)
}

document.querySelector('#searchInput').addEventListener('keyup', event => {    
    let key = event.target.value
    let filteredTasks = tasks.filter(item => {
        return item.name.includes(key)
    })
    renderTask(filteredTasks)
})


function toggleComplete(id) {
    let obj=tasks.find(item => item.id === id)
    obj.isCompleted = ! obj.isCompleted
    localStorage.setItem('tasks',JSON.stringify(tasks))
    renderTask(tasks)
}