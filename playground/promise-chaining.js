require('../src/db/mongoose')
const User = require('../src/models/user')

//5f09f1f22d3e668058e9d433

// User.findByIdAndUpdate('5f09f2311e9a6409d4b70c3a', { age: 1}).then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result);    
// }).catch((e) => {
//     console.log(e);
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age: age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5f09f2311e9a6409d4b70c3a', 2).then((count) => {
    console.log(count);        
})