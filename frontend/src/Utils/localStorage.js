export const loadData = (key) => {
    try{
        !key && new Error('key is not defined')
        let data = localStorage.getItem(key)
        data = JSON.parse(data)
        return data
    }catch(err){
        return
    }
}

export const saveData = (key,data) => {
    localStorage.setItem(key,JSON.stringify(data))
}