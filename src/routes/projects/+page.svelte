<script>
  import Navbar from "../../components/navbar.svelte";
  import ProjectCard from "../../components/projectCard.svelte";
  import { base } from "$app/paths";
</script>

<Navbar />
<div class="text-center">
  <h1 class="h1 text-white">My Projects</h1>
</div>
<br />
<br />

<div class="flex content-evenly gap-4">
  <ProjectCard
    ref="https://www.github.com/eef-g/DOOM-Remake"
    title="DOOM Remake"
    content="https://mir-s3-cdn-cf.behance.net/project_modules/hd/db0fb575998179.5c5c77159af9a.jpg"
    alt="DOOM Image"
    desc="A recreation of the DOOM engine using C++ and raylib."
  />

  <ProjectCard
    ref="https://www.github.com/eef-g-archive/Dungeoneer"
    title="Dungeoneer"
    content="https://raw.githubusercontent.com/eef-g-archive/Dungeoneer/main/DungeonDelver/Resources/Slimev1.png"
    alt="Slime Picture"
    desc="A dungeon roguelike written in C# for Windows Forms."
  />

  <ProjectCard
    ref="https://www.github.com/eef-g/dotfiles"
    title="Dotfiles"
    content="{base}/images/termnial_example.gif"
    alt="Terminal GIF"
    desc="A collection of my UNIX application dotfiles."
  />

  <ProjectCard
    ref="https://www.github.com/eef-g/Dungeoneer_JavaEdition"
    title="Dungeoneer: Java Edition"
    content="{base}/images/Slime_java.png"
    alt="Slime Java Picture"
    desc="A remake of the Dungeoneer game in Java and LibGDX."
  />
</div>
