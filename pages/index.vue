<template>
  <div>
    <input v-model="message" @keyup.enter="sendMessage" placeholder="Tape un message" />
    <ul>
      <li v-for="(msg, index) in messages" :key="index">{{ msg }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { $socket } = useNuxtApp();
const message:string = ref('');
const messages = ref<string[]>([]);

const sendMessage = ():void => {
  if (message.value.trim()) {
    $socket.emit('chat message', message.value);
    message.value = '';
  }
};

onMounted(():void => {
  $socket.on('chat message', (msg: string) => {
    messages.value.push(msg);
  });
});
</script>
