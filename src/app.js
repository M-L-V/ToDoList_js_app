import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: ["do grocery shop", "clean room", "tidy notes"
      ],
      newTodo: ""
    },
    methods: {
      saveNewTodo: function(){
        this.todos.push(this.newTodo);
        this.newTodo = "";
      }
    }
  });
});
