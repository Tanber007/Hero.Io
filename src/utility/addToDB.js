const getStoreApp =()=>{
    const storedApps = localStorage.getItem("readList");

    if(storedApps){
        const storedData = JSON.parse(storedApps);
        return storedData;
    }
    else{
        return [];
    }
}

const addToStoreDb = (id) =>{

    const storedData = getStoreApp();

    if(storedData.includes(id)){
        alert("It alredy exist");
    }
    else{
        storedData.push(id);
        const data = JSON.stringify(storedData);
        localStorage.setItem('readList', data);
    }
}

export {addToStoreDb}