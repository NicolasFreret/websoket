import { io } from 'socket.io-client';

export default defineNuxtPlugin(() => {
  const socket = io('http://tsk8s0o0c404scgc0swoowg4.62.171.190.162.sslip.io');

  return {
    provide: {
      socket,
    },
  };
});
