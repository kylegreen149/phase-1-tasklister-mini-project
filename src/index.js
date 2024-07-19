document.addEventListener("DOMContentLoaded", () => {
    // your code here
    //First find the search for the form element and store a reference to it in a variable
    const createTaskForm = document.getElementById("create-task-form")

    //Next add event listener to form element so that the form element will listen to a submit event and code will be executed
    document.addEventListener("submit", (event) => {
      event.preventDefault()

      // search for the ul element where tasks need to be added to
      const taskList = document.getElementById("tasks")
      // create a new list item element for the new task data to go inside
      const tasksLi = document.createElement("li")

      // search for input element where the user types text
      const newTaskDescriptionElement = document.getElementById("new-task-description")
      // append the string containing within the attribute for the input element inside of the new Li element
      tasksLi.append(newTaskDescriptionElement.value + " ")

      // create a new button to delete the task
      const deleteTaskButton = document.createElement("button")

      //set the text content attribute for the button so it has a value of x
      deleteTaskButton.textContent = "x"

      // create a new attribute name "data-description" for button element. Attributes value will be name of the new tasks
      deleteTaskButton.setAttribute("data-description", newTaskDescriptionElement.value)

      // listen for delete button click event to delete everything in the lists
      deleteTaskButton.addEventListener("click", () => {
        tasksLi.remove()
      })

      // append button inside of list item
      tasksLi.append(deleteTaskButton)

      // final step: append the new list tag inside of the ul element
      taskList.appendChild(tasksLi)

      // clear the inputs within the form after submission
      createTaskForm.reset()
    })
});
