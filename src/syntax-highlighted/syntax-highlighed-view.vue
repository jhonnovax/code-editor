<script>
export default {
	mounted() {
		const codeInputPlugins = [
			new codeInput.plugins.Indent()
		];
		//codeInputTemplate = codeInput.templates.hljs(hljs, codeInputPlugins);
		const codeInputTemplate = codeInput.templates.prism(Prism, codeInputPlugins);
		codeInput.registerTemplate("syntax-highlighted", codeInputTemplate);
	}
}
</script>

<template>
	<div ref="mainEl" class="syntax-highlighted">
		<code-input class="line-numbers" language="HTML"></code-input>
	</div>
</template>

<style scoped>
.syntax-highlighted {
	padding: 10px;
}
</style>