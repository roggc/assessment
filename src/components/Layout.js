import classes from "./Layout.module.css";

const Layout = ({ children, header, footer }) => (
  <>
    <div data-testid="header" className={classes.header}>
      {header}
    </div>
    <div className={classes.content}>{children}</div>
    <div data-testid="footer" className={classes.footer}>
      {footer}
    </div>
  </>
);

export default Layout;
