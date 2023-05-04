
# hello-world

<script setup lang="ts">
  import Deferred from 'simple-deferred2';

  const main = ()=>{
    const deferred = new Deferred();
    setTimeout(()=>{
      deferred.resolve('ok')
    }, 2000);

    return deferred.promise;
  }

  main().then(console.log)
</script>

<div>
  1
</div>