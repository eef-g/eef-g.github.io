<script>
  import Navbar from "../components/navbar.svelte";
  import FooterBar from "../components/footerBar.svelte";
  import { base } from "$app/paths";
</script>

<Navbar />

<div
  class="container h-screen mx-auto flex justify-center items-container bg-surface-500"
>
  <div
    class="space-y-5 text-surface-50 h-full justify-center text-center object-center"
  >
    <h1 class="h1">Ethan Gray's Portfolio</h1>
    <hr />
    <div class="flex origin-center place-self-center justify-center">
      <img
        src="{base}/images/build_anim.gif"
        alt="GIF"
        class="object-center h-64 w-66"
      />
    </div>
    <hr />
    <h2 class="h2">
      This website is currently under construction. You can follow the
      development of the website on my GitHub:
    </h2>
    <div class="flex justify-center">
      <a href="https://github.com/eef-g/eef-g.github.io"
        ><img
          src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/eef-g/eef-g.github.io.png"
          width="460px"
          alt="Github Repo Card"
        /></a
      >
    </div>
  </div>
</div>
<FooterBar />
