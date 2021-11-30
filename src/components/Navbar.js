import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Button from'@material-ui/core/Button';

function Navbar(){
    return (
    <nav class="navbar navbar-custom">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">
        <MenuRoundedIcon className="menu-icon"/> 
        <img className="brand-logo" src="./brand-icon.svg" alt="logo"></img> 
        <Button className="btn-custom" variant="outlined">Sign In</Button>
      </span>
      
    </div>
  </nav>
  );
    
}
export default Navbar;