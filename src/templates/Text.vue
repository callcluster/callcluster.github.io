<template>
  <Layout>
    <VueRemarkContent class="content"/>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.text.title,
    }
  }
}
</script>

<page-query>
query ($id: ID!) {
  text(id: $id) {
    title
  }
}
</page-query>