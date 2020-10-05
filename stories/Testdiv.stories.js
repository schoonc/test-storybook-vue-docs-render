import Testdiv from './Testdiv.vue';

export default {
  title: 'testdiv',
  component: Testdiv,
};

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Testdiv },
  template: '<testdiv v-bind="$props" />',
})
