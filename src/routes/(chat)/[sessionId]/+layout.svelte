<script>
	import Header from '@/components/common/Header.svelte';
	import { CHAT_TYPO } from '@/config/chat/typo';
</script>

<section class="flex h-full items-stretch bg-gray-200">
	<aside
		class="flex w-0 origin-left flex-col items-center justify-between overflow-hidden bg-gray-50 shadow transition-all sm:w-80"
	>
		<div />
		<div class="w-80 p-4 text-center">
			<Header />
			<p class="font-tangerine text-3xl text-gray-600">Your Chariot awaits!</p>
			<p class="my-4 text-justify text-sm">{CHAT_TYPO.sidebar.paraOne}</p>
			<p class="my-4 text-justify text-sm">{CHAT_TYPO.sidebar.paraTwo}</p>
		</div>

		<p class="mb-4 text-sm italic text-gray-600">
			&copy; {CHAT_TYPO.sidebar.copy}
		</p>
	</aside>
	<slot />
</section>
