import Header from './Header';

const Layout = props => (
  <>
    <div class="template">
    	<Header />
    	{props.children}
    </div>
  </>
);

export default Layout;
