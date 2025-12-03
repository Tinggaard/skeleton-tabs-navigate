<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import { page } from "$app/state";
  import { Tabs } from "@skeletonlabs/skeleton-svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="m-4">
  <p class="mb-10">Here is some static layout content, that never changes...</p>

  <Tabs value={page.url.pathname}>
    <Tabs.List>
      <Tabs.Trigger value="/foo">
        {#snippet element(attributes: Record<string, unknown>)}
          <a href="/foo" {...attributes}> Foo </a>
        {/snippet}
      </Tabs.Trigger>

      <Tabs.Trigger value="/bar">
        {#snippet element(attributes: Record<string, unknown>)}
          <a href="/bar" {...attributes}> Bar </a>
        {/snippet}
      </Tabs.Trigger>

      <Tabs.Indicator />
    </Tabs.List>

    {@render children?.()}
  </Tabs>
</div>
