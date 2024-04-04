<script>
import { htmlContent } from '../services/data-content';

export default {

	data() {
		return {
			editorValue: htmlContent.join('\n')
		}
	},
	mounted() {
		const codeInputPlugins = [
			new codeInput.plugins.Indent(false, 2),
		];
		const codeInputTemplate = codeInput.templates.prism(Prism, codeInputPlugins);
		codeInput.registerTemplate("demo", codeInputTemplate);
	}
}
</script>

<template>
	<div ref="mainEl" class="syntax-highlighted">
		<code-input class="editor line-numbers" language="HTML">
			{{ editorValue }}
		</code-input>
	</div>
</template>

<style scoped>
.syntax-highlighted {
	.editor {
		height: 300px;
	}
}
</style>