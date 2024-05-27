<script>
  import Navbar from "../../components/navbar.svelte";
  import ProjectCard from "../../components/projectCard.svelte";
</script>

<Navbar />
<div class="text-center">
  <h1 class="h1 text-white">My Projects</h1>
</div>

<ProjectCard
  ref="https://github.com/eef-g/DOOM-Remake"
  title="DOOM Remake"
  content="https://mir-s3-cdn-cf.behance.net/project_modules/hd/db0fb575998179.5c5c77159af9a.jpg"
  alt="DOOM Image"
  desc="A recreation of the DOOM engine using C++ and raylib"
/>
