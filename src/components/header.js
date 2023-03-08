
function Header(){
  return (
    <div style={{
      backgroundColor: '#06B6D4',
      display: 'flex',
      width: '100%',
    }}>
      <div style={{
      height: '50px',
      width: '64px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
        <div style={{
          width: '40px',
          height: '40px',
          backgroundColor: '#FFFFFF',
          borderRadius: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',       
        }}>
        <i style={{color:"#06B6D4"}} class="ri-shopping-cart-2-fill"></i></div>
        </div>
      <div style={{
      height: '50px',
      width: '196px',
    }}>
        <p style={{
        margin: '0',
        paddingTop: '5px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '16px',
        color: 'white',
      }}>
        Add expense to</p>
        <p style={{
        margin: '0',
        paddingBottom:'5px',
        fontFamily:'Inter',
        fontStyle:'normal',
        fontWeight:'500',
        fontSize:'16px',
        lineHeight:'24px',
        color: 'white',
      }}>
        Groceries</p>
      </div>
    </div>
  );
}

export default Header;

