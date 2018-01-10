import { app, h } from 'hyperapp'

app(
  { view: 'default', lazyViews: {} },
  {
    setView: view => state => {
      return { view: view }
    },
    loadLazyView: ({
      view,
      name,
      cb,
    }: {
      view: Promise<JSX.Element<any>>
      name: string
      cb: () => void
    }) => (state, actions) => {
      view.then(view => {
        actions.setLazyView({ view, name })
        cb && cb()
      })
    },
    setLazyView: ({
      view,
      name,
    }: {
      view: JSX.Element<any>
      name: string
    }) => state => {
      return {
        lazyViews: { [name]: view },
      }
    },
  },
  (state, actions) => (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button
        onclick={() => {
          actions.loadLazyView({
            view: import('./Lazyview/Lazyview'),
            name: 'lazy',
            cb: () => actions.setView('lazy'),
          })
        }}
      >
        Load lazy view
      </button>,
      <div>{getView(state.view, state.lazyViews)}</div>
    </div>
  ),
  document.body
)

const getView = (view, lazyViews, setView, loadLazyView) => {
  switch (view) {
    case 'lazy':
      return lazyViews['lazy'] ? lazyViews['lazy'].Lazyview : 'loading'
    case 'default':
    default:
      return []
  }
}
