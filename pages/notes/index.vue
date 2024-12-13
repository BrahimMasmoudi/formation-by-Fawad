<template>
  <h1>Notes</h1>
  <br>
  <button @click="boolean = !boolean">Add new note</button>
  <br>
  <br>

  <component :is="boolean ? newNotes : newCard" />
<!--  <NotesNewNote v-if="boolean"/>-->
  <br/>
  <br/>

<!--  <div class="flex">-->
<!--    <NotesNoteCard/>-->
<!--    <NotesNoteCard/>-->
<!--    <NotesNoteCard/>-->
<!--  </div>-->
</template>
<script setup lang="ts">
const boolean = ref(false)
const newNotes = resolveComponent('NotesNewNote')
const newCard = resolveComponent('NotesNoteCard')

</script>


<style scoped>
.flex {
  display: flex;
}
</style>