import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

const HomeItem = ({item}) => {

  const bag = useSelector(store => store.bag)
  const dispatch = useDispatch();
  const elementFound = bag.indexOf(item.id) >= 0;

  const handleAddToBag = ()=>{
      dispatch(bagActions.addToBag(item.id))
  }

  const handleRemoveFromBag = ()=>{
    dispatch(bagActions.removeFromBag(item.id))
}

  return (
    <div className="item-container">
      <div className="item-img-wrapper">
         <img className="item-image" src={item.image} alt="item image"/>
      </div>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? 
      <button className="btn-rmv-bag" onClick={handleRemoveFromBag}>Remove</button> : 
      <button className="btn-add-bag" onClick={handleAddToBag}>Add to Bag</button>
      }
    </div>
  )
}

export default HomeItem;