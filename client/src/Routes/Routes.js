const routes = [
  {
    path: '/',
    exact: true,
    light: () => <div>home!</div>,
    dark: () => <h2>Home</h2>
  },
  {
    path: '/bubblegum',
    sidebar: () => <div>bubblegum!</div>,
    dark: () => <h2>Bubblegum</h2>
  },
  {
    path: '/shoelaces',
    sidebar: () => <div>shoelaces!</div>,
    dark: () => <h2>Shoelaces</h2>
  }
];
