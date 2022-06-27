import { writable } from 'svelte/store';

const userStore = JSON.parse(localStorage.getItem('user')) ||
  {
    "id": null,
    "name": null,
    "username": null,
    "avatar": null,
    "banner": null
  };

export const user = writable(userStore);

user.subscribe((data) => {
  localStorage.setItem('user', JSON.stringify(data));
});