


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FoodPage />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('products')
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}