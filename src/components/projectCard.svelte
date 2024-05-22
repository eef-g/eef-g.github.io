<script>
  export let ref;
  export let title;
  export let content;
  export let alt;
  export let desc;
</script>

<a class="block card card-hover w-1/4 bg-secondary-500" href={ref}>
  <header class="card-header">
    <img src={content} {alt} />
  </header>
  <section class="p-4 bg">
    <h2 class="h2">{title}</h2>
    <br />
    <p class="p">{desc}</p>
  </section>
  <footer class="card-footer">
    <hr />
    Made by Ethan
  </footer>
</a>
