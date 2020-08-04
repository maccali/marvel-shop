
import React, { useEffect, useState } from 'react'

import CartHelper from '../../../helpers/CartHelper'
import CartCard from '../../cards/CartCard'

import styles from './CartContent.module.css'
import Btn from '../../utils/Btn'


function CartContent() {

  const [items, setItems] = useState<Array<ComicFace>>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);

  function getTotals() {
    items.map(item => {
      setTotalPrice(totalPrice + item.prices[0].price)
      setTotalQuantity(totalQuantity + item.quantity)
    })
  }

  function getData() {
    setItems(CartHelper.getCart())
    getTotals()
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="container p-0">
          <div className="row">
            <div className="col-12">
              <h1 className={styles.title}>Shopping Cart</h1>
            </div>
          </div>
          <div className="row">
            {items ?
              items.map(item =>
                <CartCard
                  title={item.title}
                  imgUrl={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  price={item.prices[0].price}
                  quantity={item.quantity}
                  total={item.total}
                />
              )
              :
              <div className="col-12">
                Cart Empity
              </div>
            }
          </div>
          <div className="row">
            <div className="col-6">
              <div className={styles.totals}>
                <div className={styles.totalprice}>
                  {totalPrice}
                </div>
                <div className={styles.totalprice}>
                  {totalQuantity}
                </div>
              </div>
            </div>
            <div className="col-6">
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartContent