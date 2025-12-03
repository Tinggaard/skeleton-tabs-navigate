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

<svelte:boundary>
  <!-- BUG: this runs every time the tabs are used to navigate -->
  {#snippet pending()}
    loading entire page...
  {/snippet}

  <div class="m-4">
    <p class="mb-10">
      Here is some static layout content, that never changes...
    </p>

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

      <!-- FIX: when it should only be this... -->
      <svelte:boundary>
        {#snippet pending()}
          loading subpage
        {/snippet}

        {@render children?.()}
      </svelte:boundary>
    </Tabs>
  </div>
</svelte:boundary>
