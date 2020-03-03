<template>
  <entity-detail :is-edit="false" />
</template>

<script>
import EntityDetail from './components/EntityDetail'

export default {
  name: 'CreateForm',
  components: { EntityDetail }
}
</script>

