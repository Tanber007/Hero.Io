const getStoreApp = () => {
    const storedApps = localStorage.getItem("readList");

    if (storedApps) {
        const storedData = JSON.parse(storedApps);
        return storedData;
    }
    else {
        return [];
    }
}

const addToStoreDb = (id) => {

    const storedData = getStoreApp();

    if (storedData.includes(id)) {
        alert("It alredy exist");
    }
    else {
        storedData.push(id);
        const data = JSON.stringify(storedData);
        localStorage.setItem('readList', data);
    }
}

const removeFromStoreDb = (id) => {
    const storedData = getStoreApp();
    const updatedData = storedData.filter(appId => String(appId) !== String(id));
    const data = JSON.stringify(updatedData);
    localStorage.setItem('readList', data);
}

export { addToStoreDb, getStoreApp, removeFromStoreDb }