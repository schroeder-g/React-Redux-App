import React, { useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchPlayers } from '../store'

 function Players(props) {
    useEffect( () => {
        props.fetchPlayers()
    }, []) 
    console.log(props.players.data)
    return (
        <section className="player-gallery">
            <h2> Biggest Ballers in the NBA <span role="img">🏀</span></h2>
           { props.players.data ? (
                <div>
                {props.players.data.map( (player) => (
                    <div className="player" key={player.id}>
                        <h3>{`${player.first_name} ${player.last_name}`}</h3>    
                        <h4> </h4>

                    </div>
                ))}
                </div>
            ) : null
            }
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        errors: state.errors,
        isLoading: state.isLoading,
        players: state.players
    }
}

export default connect(mapStateToProps, {fetchPlayers})(Players)