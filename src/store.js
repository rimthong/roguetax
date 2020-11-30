import { writable } from 'svelte/store';

export const settings = writable({
  partySize: 4,
  tax: 20,
})
