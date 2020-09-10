import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
// import BeerFinderForm from './BeerFinderForm'

export default function BeerModal(props){
  const [isOpen, setIsOpen] = React.useState(true);
  const history = useHistory()

  // const showModal = () => {
  //   setIsOpen(true);
  // };
  //
  const hideModal = () => {
    setIsOpen(false);
    history.push(`/home`)
    console.log("take me to slash")
  };

  let beer = props.beer
  return (
    <div>
      <Modal
        {...props}
        show={isOpen}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <img src={beer.image_url} alt=""/>&nbsp;&nbsp;&nbsp;
            {beer.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {beer.style} - abv: {beer.abv} - rating: {beer.rating}<br/>
          <strong>{beer.brewery.name}</strong><br/>
            {beer.brewery.city}, {beer.brewery.state}
          </p>
          <p>
            {beer.description}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={hideModal} >Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
