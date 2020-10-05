<template>
  <div class="testdiv" :class="{'testdiv-red': red}">TEST</div>
</template>

<script>
import './testdiv.css';

export default {
  name: 'testdiv',

  props: {
    red: Boolean
  },
};
</script>
