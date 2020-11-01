<template>
  <div>
    <header class="hero  is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">Callcluster</h1>
          <h2 class="subtitle">Tool for callgraph <strong>extraction</strong>, <strong>analysis</strong> and <strong>visualization</strong></h2>
        </div>
      </div>
    </header>
    <div class="section">
      <div class="container">
        <slot />
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
