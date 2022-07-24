const { useLocalStorage } = require("@vueuse/core");


const persistantState = useLocalStorage('--app-auth--', {
  token: '',
});


export const token = computed({
  get() { return persistantState.value.token; },
  set(value) { persistantState.value.token = value; }
});
