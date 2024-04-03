import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './home/home-view.vue';
import CodeMirrorView from './code-mirror/code-mirror-view.vue';
import MonacoEditorView from './monaco-editor/monaco-editor-view.vue';
import AceEditorView from './ace-editor/ace-editor-view.vue';
import SyntaxHighlightedView from './syntax-highlighted/syntax-highlighed-view.vue';

const routes = [
	{ path: '/', component: HomeView },
	{ path: '/code-mirror', component: CodeMirrorView },
	{ path: '/monaco-editor', component: MonacoEditorView },
	{ path: '/ace-editor', component: AceEditorView },
	{ path: '/syntax-highlighted', component: SyntaxHighlightedView },
]

const router = createRouter({
	history: createMemoryHistory(),
	routes,
})

export default router