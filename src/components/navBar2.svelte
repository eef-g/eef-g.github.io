<script>
  import {
    AppBar,
    Avatar,
    initializeStores,
    Drawer,
    getDrawerStore,
  } from "@skeletonlabs/skeleton";
  export let title;
  initializeStores();

  const drawerStorage = getDrawerStore();
  const drawerSettings = {
    // Provide your property overrides:
    bgDrawer: "bg-secondary-700 text-white",
    bgBackdrop:
      "bg-gradient-to-tr from-primary-500/50 via-secondary-500/50 to-tertiary-500/50",
    width: "w-[280px] md:w-[480px]",
    padding: "p-4",
    rounded: "rounded-xl",
  };

  function openDrawer() {
    drawerStorage.open(drawerSettings);
  }
</script>

<Drawer>
  <h1>Hello!</h1>
</Drawer>
<AppBar
  gridColumns="grid-cols-3"
  slotDefault="place-self-center"
  slotTrail="place-content-end"
  background="bg-primary-500"
>
  <svelte:fragment slot="lead">
    <button class="btn" on:click={openDrawer}>
      <h1 class="h1 text-white">≡</h1>
    </button>
  </svelte:fragment>
  <h1 class="h1 text-white">
    {title}
  </h1>
  <svelte:fragment slot="trail">
    <a href="https://github.com/eef-g"
      ><Avatar
        src="https://avatars.githubusercontent.com/u/74423016?v=4"
        border="border-4 border-surface-300-600-token hover:!border-tertiary-500"
        cursor="cursor-pointer"
      />
    </a></svelte:fragment
  >
</AppBar>
