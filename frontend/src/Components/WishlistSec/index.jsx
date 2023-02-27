import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeWish } from '../../Redux/vishlistSlicer'
import './index.scss'
function WishlistSec() {
    const dispatch = useDispatch()
    const wish = useSelector((state) => state.wish.WishProducts)
    console.log("wish", wish.WishProducts);

    const deleteWish = (id) => {
        dispatch(removeWish(id))
    }
    return (
        <section className='wishList'>
            <div className='wishListDiv'>

                {
                    wish.length !== 0 && wish.map((element) =>
                        <>
                            <div className="wishProduct">
                                <div>
                                    <img src={element.img} alt="FOTO" />
                                </div>
                                <div className="wishTXT">
                                    <p>{element.title}</p>
                                    <h3>Price:28$</h3>
                                </div>
                                <div>
                                    <i onClick={() => deleteWish(element)} className="fa-solid fa-xmark"></i>
                                    {console.log(element)}
                                </div>
                            </div>
                        </>
                    )
                }

            </div>
        </section>
    )
}

export default WishlistSec