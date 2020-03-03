<template>
  <entity-detail :is-edit="true" />
</template>

<script>
import EntityDetail from './components/EntityDetail'

export default {
  name: 'EditForm',
  components: { EntityDetail }
}
</script>

