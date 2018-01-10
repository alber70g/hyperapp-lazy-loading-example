import { app, h } from 'hyperapp';

app(
	{ view: 'default', lazyViews: {} },
	{
		setView: (view) => (state) => {
			return { view: view };
		},
		loadLazyView: ({
			view,
			name
		}: {
			view: Promise<JSX.Element<any>>;
			name: string;
		}) => (state, actions) => {
			view.then((view) => actions.setLazyView({ view, name }));
		},
		setLazyView: ({ view, name }: { view: JSX.Element<any>; name: string }) => (
			state
		) => {
			return {
				lazyViews: { [name]: view }
			};
		}
	},
	(state, actions) => (
		<div>
			<pre>{JSON.stringify(state, null, 2)}</pre>
			<button
				onclick={() =>
					actions.loadLazyView({
						view: import('./Lazyview/Lazyview'),
						name: 'lazy'
					})}
			>
				Switch to lazy view
			</button>,
			<div>
				{state.lazyViews['lazy'] && state.lazyViews['lazy'].Lazyview ? (
					state.lazyViews['lazy'].Lazyview
				) : (
					'loading'
				)}
			</div>
		</div>
	),
	document.body
);

const getView = (view, lazyViews, setView, loadLazyView) => {
	switch (view) {
		case 'default':
		default:
			return [];
	}
};
