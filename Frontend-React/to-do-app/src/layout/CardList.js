import React, { Component } from 'react'





const CardList = (props) => (
    <div>
        {/* <Card {...testData[0]} /> */}
        {props.profiles.map(profile => <Card {...profile}/>)}
        {/* Lista obiektow testData jest mapowana na nową listę */}
        {/* Daje to dostep do pojedynczego obiektu profil */}
        {/* Mapujemy go do obiektu Card i przekazujemy propsy ze zmiennej profile */}
    </div>
)

class Card extends Component {
    render () {
        const profile = this.props;
        return (
            <div>
                    <div className='card mx-2 p-2 text-center'>
                            <ul className='list-group list-group-flush'>
                                {/* <li className='list-group-item'>
                                    <img src={profile.avatar_url}/>
                                </li> */}
                                <li className='list-group-item'>
                                    Name: <b>{profile.name}</b>
                                </li>
                                <li className='list-group-item'>
                                    Company: <b>{profile.company}</b>
                                </li>
                            </ul>
                    </div>
        
            </div>
        )}
}



export default CardList;
