require('../src/db/mongoose')
const Task = require('../src/models/task')

//5f09f1f22d3e668058e9d433

// Task.findByIdAndDelete('5f09f2fbece2fc461c9df18a').then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result);    
// }).catch((e) => {
//     console.log(e);
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5f09ec88872d1aa210508b81').then((count) => {
    console.log(count);        
}).catch((e) => {
    console.log(e);    
})