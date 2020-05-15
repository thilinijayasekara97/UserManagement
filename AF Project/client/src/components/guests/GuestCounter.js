// @flow
import React ,{ useContext} from 'react';
import GuestContext from "../../context/guestContext/guestContext";

const GuestCounter = () => {
    const { guests} = useContext(GuestContext)
    const totalInvited = guests.length
    const attending = guests.filter(guest => guest.isconfirmed)
    const totalAttending = attending.length
    const invitedByItem = (type)=> guests.filter(guest => guest.item === type).length
    const attendingByItem = (type)=> attending.filter(guest => guest.item === type).length

        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <th>Guest</th>
                        <th>Invited</th>
                        <th>Attending</th>
                    </tr>
                    <tr>
                        <th>Clothes</th>
                        <th>{invitedByItem('Clothes')}</th>
                        <th>{attendingByItem('Clothes')}</th>
                    </tr>
                    <tr>
                        <th>Shoes</th>
                        <th>{invitedByItem('Shoes')}</th>
                        <th>{attendingByItem('Shoes')}</th>
                    </tr>
                    <tr>
                        <th>Bags</th>
                        <th>{invitedByItem('Bags')}</th>
                        <th>{attendingByItem('Bags')}</th>
                    </tr>
                     <tr>
                        <th>Total</th>
                        <th>{totalInvited}</th>
                        <th>{totalAttending}</th>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
}

export default GuestCounter