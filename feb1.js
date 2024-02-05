function task1 (callback){
    setTimeout(()=>{
        console.log("task1 completed")
        callback()
    },2000)
}
function task2(callback){
    setTimeout(()=>{
        console.log("task2 completed")
    callback()
    },3000)
}
function task3(callback){
    setTimeout(()=>{
        console.log("task3 completed")
    callback()
    },4000)
}

function task4(callback){
    setTimeout(()=>{
        console.log("task4 completed")
    callback()
    },5000)
}
function task5(callback){
    setTimeout(()=>{
        console.log("all task comleted")
    callback()
    },6000)
}
task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                task5(()=>{
                    
                })
            })
        })
    })
})
