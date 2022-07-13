import Header from './Header'
import Main from './Main'

const Layout = () => {
  return (
    <div className="flex flex-col" data-testid="layout-div">
      <Header />
      <Main />
    </div>
  )
}

export default Layout
