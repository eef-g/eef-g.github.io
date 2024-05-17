<script>
  // There's no script here yet :)
  import { base } from "$app/paths";
</script>

<div>
  <nav>
    <a href="https://www.github.com/eef-g">
      <img
        src="https://avatars.githubusercontent.com/u/74423016?v=4"
        width="30"
        height="30"
        alt="GitHub"
      />
    </a>
    <a href="{base}/">Home</a>
    <a href="{base}/about">About</a>
    <a href="{base}/projects">Projects</a>
  </nav>
</div>

<style>
  nav {
    width: 100%;
    height: 5vh; /* Use viewport height (vh) units to make the height 5% of the screen height */
    display: flex; /* Use flexbox for layout */
    justify-content: center; /* Center items horizontally */
    align-items: center; /* Center items vertically */
    gap: 2vw;
  }

</style>
