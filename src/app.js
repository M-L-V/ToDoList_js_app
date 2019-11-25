import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      tasks: ["do grocery shop", "clean room", "tidy notes"
      ],
      newTask: ""
    },
    methods: {
      saveNewTask: function(){
        this.tasks.push(this.newTask);
        this.newTask = "";
      }
    }
  });
});
