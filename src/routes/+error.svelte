<script lang="ts">
	import { page } from '$app/stores';
	console.log($page.error);
</script>

<h1>{$page.error?.code ?? 500}: {$page.error?.message ?? 'Unexpected error'}</h1>
