import React, {useState, useContext ,useEffect} from 'react';
import GuestContext from "../../context/guestContext/guestContext";

const GuestForm = () => {
    const {addGuest , editAble , updateGuest , clearEdit} = useContext(GuestContext)
    useEffect(() => {
        if(editAble !== null){
            setGuest(editAble)
        }else {
            setGuest({
                name: '',
                phone: '',
                item: 'Clothes'
            })

        }
    },[editAble])
    const [guest, setGuest] = useState({
        name: '',
        phone: '',
        item: 'Clothes'
    })

    if(editAble !== null){
        console.log(editAble)
    }
    const {name,phone,item} = guest

    const handleChange= e => {
        setGuest({
            ...guest,
            [e.target.name]:e.target.value
        })
    }

    const onsubmit = e => {
        e.preventDefault()
        if(editAble !== null){
            updateGuest(guest)
            clearEdit()
        }else {
            addGuest(guest)
            setGuest({
                name: '',
                phone: '',
                item: 'Clothes'
            })
        }

    }
        return (
            <div className="invite-section">
            <h1>{editAble !== null ? 'Edit Guest' : 'Place An Order !'}</h1>
            <form onSubmit={onsubmit}>
                <input type="text" placeholder="Name" name="name" value={name} onChange={handleChange}/>
                <input type="text" placeholder="Phone" name="phone" value={phone} onChange={handleChange}/>
                <p className="options-label">Items</p>
                <div className="options">
                    <label className="container">Clothes
                        <input type="radio" name="item" value='Clothes' checked={item === 'Clothes'} onChange={handleChange}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">Shoes
                        <input type="radio" name="item" value='Shoes'  onChange={handleChange} checked={item === 'Shoes'}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">Bags
                        <input type="radio" name="item" value='Bags'  onChange={handleChange} checked={item === 'Bags'}/>
                        <span className="checkmark"></span>
                    </label>
                </div>
                <input type="submit" value={editAble !== null ? 'Update Guest' : 'Add Guest'} className="btn" />
                {editAble !== null ? <input onClick={clearEdit} value="cancel" type = "button" className="btn clear"/> : null }
            </form>
            </div>
        )
}

export default GuestForm;