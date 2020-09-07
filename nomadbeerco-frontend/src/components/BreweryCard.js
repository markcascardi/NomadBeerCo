import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { withRouter } from 'react-router-dom'

export default function BreweryCard(props){
  const [isOpen, setIsOpen] = React.useState(true);

  // const showModal = () => {
  //   setIsOpen(true);
  // };

  const hideModal = () => {
    setIsOpen(false);

  };

  let id = parseInt(props.match.params.id)
  let brewery = props.allBreweries.find(brewery => brewery.id === id )
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
            onClick={() => this.props.history.goBack()}
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                <img src={brewery.image_url} />&nbsp;&nbsp;&nbsp;
                {brewery.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                {brewery.address}<br/>
                {brewery.city}, {brewery.state} {brewery.zip_code}
              </p>
                <ListGroupItem>Beer Name   ::   Style   ::   Rating</ListGroupItem>

                {brewery.beers.map(beer =>
                  <ListGroupItem><Link to={`/beers/${beer.id}`}>{beer.name}</Link>:: {beer.style} :: {beer.rating}</ListGroupItem>
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

// function BreweryModal() {
//   const [modalShow, setModalShow] = React.useState(false);
//
//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>
//
//       <BreweryCard
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }
