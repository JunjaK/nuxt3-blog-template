<script setup>
console.log('test');
</script>

<template>
  <div class="html-table">
    <slot></slot>
  </div>
</template>

<style lang="scss" >
.html-table {
  table {
    position: relative;
    text-align: left;
  }
  table th:first-child {
    position: sticky;
    position: -webkit-sticky;
    left: 0px;
    z-index: 11;
  }
  table :where(th, td) {
    white-space: nowrap;
    padding: 1rem/* 16px */;
    vertical-align: middle;
  }
  table tr.active th, 
    table tr.active td, 
    table tr.active:nth-child(even) th, 
    table tr.active:nth-child(even) td {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity));
  }
  table tr.active th, 
    table tr.active td, 
    table tr.active:nth-child(even) th, 
    table tr.active:nth-child(even) td {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity));
  }
  table tr.active th, 
    table tr.active td, 
    table tr.active:nth-child(even) th, 
    table tr.active:nth-child(even) td {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity));
  }
  table tr.active th, 
    table tr.active td, 
    table tr.active:nth-child(even) th, 
    table tr.active:nth-child(even) td {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity));
  }
  table tr.hover:hover th, 
    table tr.hover:hover td, 
    table tr.hover:nth-child(even):hover th, 
    table tr.hover:nth-child(even):hover td {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity));
  }
  table tr.hover:hover th, 
    table tr.hover:hover td, 
    table tr.hover:nth-child(even):hover th, 
    table tr.hover:nth-child(even):hover td {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity));
  }
  table tr.hover:hover th, 
    table tr.hover:hover td, 
    table tr.hover:nth-child(even):hover th, 
    table tr.hover:nth-child(even):hover td {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity));
  }
  table tr.hover:hover th, 
    table tr.hover:hover td, 
    table tr.hover:nth-child(even):hover th, 
    table tr.hover:nth-child(even):hover td {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity));
  }
  table:where(:not(table-zebra)) :where(thead, tbody, tfoot) :where(tr:not(:last-child) :where(th, td)) {
    border-bottom-width: 1px;
    --tw-border-opacity: 1;
    border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));
  }
  table :where(thead, tfoot) :where(th, td) {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));
    font-size: 0.75rem/* 12px */;
    line-height: 1rem/* 16px */;
    font-weight: 700;
    text-transform: uppercase;
  }
  table :where(:first-child) :where(:first-child) :where(th, td):first-child {
    border-top-left-radius: 0.5rem/* 8px */;
  }
  table :where(:first-child) :where(:first-child) :where(th, td):last-child {
    border-top-right-radius: 0.5rem/* 8px */;
  }
  table :where(:last-child) :where(:last-child) :where(th, td):first-child {
    border-bottom-left-radius: 0.5rem/* 8px */;
  }
  table :where(:last-child) :where(:last-child) :where(th, td):last-child {
    border-bottom-right-radius: 0.5rem/* 8px */;
  }
  table :where(tbody th, tbody td) {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b1) / var(--tw-bg-opacity));
  }
  table {
    display: table;
  }
  /* layer: default */
  table {
    display: table;
  }
}
</style>