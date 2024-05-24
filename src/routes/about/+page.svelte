<script>
  import NavBar2 from "../../components/navBar2.svelte";
  import FooterBar from "../../components/footerBar.svelte";
  import { Avatar } from "@skeletonlabs/skeleton";
</script>

<NavBar2 title="About Me" />
<div class="h-screen">
  <Avatar src="https://avatars.githubusercontent.com/u/74423016?v=4" />
  <h1 class="text-surface-50">About</h1>
</div>
<FooterBar />
