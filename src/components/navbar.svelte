<script>
  import { base } from "$app/paths";
  import { AppBar, Avatar } from "@skeletonlabs/skeleton";
</script>

<AppBar
  gridColumns="grid-cols-3"
  slotTrail="place-content-end"
  background="bg-primary-900"
  regionRowMain="h-15 w-fill"
>
  <svelte:fragment slot="lead">
    <a href="{base}/"
      ><Avatar
        src="https://avatars.githubusercontent.com/u/74423016?v=4"
        border="border-4 border-surface-300-600-token hover:!border-tertiary-500"
        cursor="cursor-pointer"
      />
    </a>
  </svelte:fragment>

  <svelte:fragment slot="trail">
    <a class="btn variant-filled-secondary" href="{base}/about">About</a>
    <a class="btn variant-filled-tertiary" href="{base}/projects">Projects</a>
  </svelte:fragment>
</AppBar>
