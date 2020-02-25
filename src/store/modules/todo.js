import Todo from '@/utils/TodoEntity'

export default {
  state: {
    todoList: [

    ]
  },

  mutations: {
    addTodo (state, payload) {
      state.todoList.unshift(payload)
    }
  },

  actions: {
    addTodo({commit}, payload) {
      try {
        let todoEntity = new Todo()
        const todo = todoEntity
          .setText(payload)
          .getObject()

        addTodo()

        commit('addTodo', todo)


      } catch (err) {
        console.error(err);
      }
    }
  },

  getters: {
    todoList (state) {
      return state.todoList
    }
  }
}

async function addTodo(todoItem) {
  let db;

  const dbName = 'AppDB'
  const storeName = 'todoList'
  const version = 1

  const openRequest = indexedDB.open(dbName, version)

  openRequest.onsuccess = function(e) {
    console.log("Success!");
    db = e.target.result;
    return db
  }

  openRequest.onupgradeneeded = function(e) {
    console.log("Upgrading...");
    const thisDB = e.target.result;

    if(!thisDB.objectStoreNames.contains(storeName)) {
      thisDB.createObjectStore(storeName);
    }
  }

  const transaction = db.transaction([storeName], "readwrite");
  const store = transaction.objectStore(storeName);

  //Perform the add
  var request = store.add(todoItem, 1);
  request.onerror = function(e) {
    console.log("Error",e.target.error.name);
    //some type of error handler
  }

  request.onsuccess = function(e) {
    console.log("Woot! Did it");
  }
}
