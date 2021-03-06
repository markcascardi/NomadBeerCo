import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { useHistory } from 'react-router-dom'


export default function BreweryCard(props){
  const [isOpen, setIsOpen] = React.useState(true);
  const history = useHistory()

  const hideModal = () => {
    setIsOpen(false);
    history.push(`/breweries`)
  };

  let id = parseInt(props.match.params.id)
  let brewery = props.breweries.find(brewery => brewery.id === id )
    if (brewery){
      return (
        <div>
          <Modal
            {...props}
            show={isOpen}
            onHide={hideModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                <img src={brewery.image_url} alt="beer"/>&nbsp;&nbsp;&nbsp;
                {brewery.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                {brewery.address}<br/>
                {brewery.city}, {brewery.state} {brewery.zip_code}
              </p>
                <ListGroupItem><strong>Beer Name   ::   Style   ::   Rating</strong></ListGroupItem>

                {brewery.beers.map(beer =>
                  <ListGroupItem key={beer.id}><Link to={`/beers/${beer.id}`}>{beer.name}</Link> :: {beer.style} :: {beer.rating}</ListGroupItem>
                )}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={hideModal} >Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      )
    } else {
      return <div>loading...</div>
  }
}
