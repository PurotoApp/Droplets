import { browser } from '$app/env';
import { writable } from 'svelte/store';

const userStore = (browser && JSON.parse(localStorage.getItem('user')) ||
  {
    "id": null,
    "name": null,
    "username": null,
    "avatar": null,
    "banner": null,
    "hasNotifications": false
  });

export const user = writable(userStore);

user.subscribe((data) => {
  browser && localStorage.setItem('user', JSON.stringify(data));
});