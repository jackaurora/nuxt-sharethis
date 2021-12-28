<template>
  <div class="">
    <Paragraph />
    <div class="highlights" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { addHighLight } from '../functions';

export default {
  async asyncData({ store }) {
    
    const sharers = await store.dispatch('sharer/getAll')

    sharers.data.map(sharer => addHighLight(sharer.el));

    window.scrollBy(0, addHighLight(sharers.selector.el, true) - 100)
  }
}
</script>
