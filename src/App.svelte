<script>
  import {settings} from "./store.js"
  let loot = 100;
  $: otherShares = Math.floor(loot / ($settings.partySize + $settings.tax / 100));
  $: yourShare = loot - otherShares * ($settings.partySize - 1);
</script>

<main>
	<h1>Rogue.tax</h1>
  <p class="text-quote">Because being picking locks and disarming traps should yield you greater rewards.</p>
  <div class="controls">
    <form>
      <label>Loot value</label>
      <input type="number" bind:value={loot} />
      <label>Number of members (rogue included)</label>
      <input type="number" min="2" max="20" bind:value={$settings.partySize} />
      <label>Rogue tax</label>
      <input type="text" min="1" max="100" bind:value={$settings.tax} />
    </form>
  </div>
  <div class="result">
    Distribute <strong>{otherShares} gold</strong> per party member, and <strong>{yourShare} for yourself</strong>. 🎉Good job!🎉
  </div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
  }
  .text-quote {
    color: #c3c2c2;
  }

  .result {
    padding: 1em;
    font-size: 2em;
  }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
