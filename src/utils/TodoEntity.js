import uuidv1 from 'uuid/v1'

class Todo {
  // constructor (text, checked, done) {
  //   this.text = text
  //   this.checked = checked || false
  //   this.checked = done || false
  // }

  setText (text) {
    this.text = text
    return this
  }

  setChecked (checked) {
    this.checked = checked
    return this
  }

  setDone (done) {
    this.done = done
    return this
  }

  setEditable (editable) {
    this.editable = editable
    return this
  }

  setObject ({id, text, checked, editable, done}) {
    this.id = id
    this.text = text
    this.checked = checked
    this.editable = editable
    this.done = done
    
    return this
  }

  getObject () {
    return {
      id: this.id || uuidv1(),
      text: this.text,
      checked: this.checked || false,
      editable: this.editable || false,
      done: this.done || false
    }
  }
}

export default Todo
