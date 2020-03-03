

function getLocalStorageByName (name) {
  const jsonData = localStorage.getItem(name)
  const data = JSON.parse(jsonData)
  return data
}

function addLocalStorageByName (name, newItem) {
  const oldJsonData = localStorage.getItem(name)

  if (oldJsonData == null) {
    const newData = [newItem]

    const newJsonData = JSON.stringify(newData)
    localStorage.setItem(name, newJsonData)
  } else {
    const oldData = JSON.parse(oldJsonData)
    const newData = [...oldData, newItem]

    const newJsonData = JSON.stringify(newData)
    localStorage.setItem(name, newJsonData)
  }

}

function deleteLocalStorageByName (name, id) {
  const oldJsonData = localStorage.getItem(name)
  const oldData = JSON.parse(oldJsonData)

  const idx = oldData.findIndex(item => item.id == id)

  oldData.splice(idx, 1)

  const newJsonData = JSON.stringify(oldData)
  localStorage.setItem(name, newJsonData)

}

function updateLocalStorageByName (name, id, todo) {
  const oldJsonData = localStorage.getItem(name)
  const oldData = JSON.parse(oldJsonData)

  const idx = oldData.findIndex(item => item.id == id)

  oldData[idx] = todo

  const newJsonData = JSON.stringify(oldData)
  localStorage.setItem(name, newJsonData)
}


export {
  getLocalStorageByName,
  addLocalStorageByName,
  deleteLocalStorageByName,
  updateLocalStorageByName
}
