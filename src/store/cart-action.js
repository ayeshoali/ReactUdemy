import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCart = () => {
return async dispatch => {
  const fetchData = async () =>{
    const response = await fetch('https://httprequest-34399-default-rtdb.firebaseio.com/cart.json');
  
    if (!response.ok) {
      throw new Error('cart data fetching failed.');
    }

    const data = await response.json();
    return data;
  };
  try {
    const data = await fetchData();
    dispatch(cartActions.replaceCart(data))
  } catch (error) {
    dispatch(
      uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'fetching cart data failed!',
      })
    );
  }

};
};


export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://httprequest-34399-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
};