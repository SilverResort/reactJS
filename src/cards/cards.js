import React from 'react'
import {Card, Button} from "react-bootstrap"
import elbosten from "./elbosten.webp"
import Erriadh from "./Erriadh.webp"
import SidiBou from "./SidiBou.webp"


const cards = () => {
    return (
        <div className="cards">

        <div className="card">
            <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={Erriadh}/>
            <Card.Body>
                <Card.Title>Le Riad</Card.Title>
                <Card.Text>
                La résidence sénior Le Riad et son style architectural éclectique, conjugue avec charme, les inspirations andalouses au style iranien
                </Card.Text>
                <Button variant="primary">Réserver</Button>
            </Card.Body>
            </Card>
        </div>

        <div className="card">
            <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={SidiBou}/>
            <Card.Body>
                <Card.Title>Sidi Bousaïd</Card.Title>
                <Card.Text>
                La résidence sénior Sidi Bousaid vous fera découvrir l’ambiance feutrée, en bleu et blanc, du célèbre village tunisien
                </Card.Text>
                <Button variant="primary">Réserver</Button>
            </Card.Body>
            </Card>
        </div>
            
        <div className="card">
            <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={elbosten} />
            <Card.Body>
                <Card.Title>Le Verger</Card.Title>
                <Card.Text>
                La résidence senior Le verger aux couleurs chatoyantes, est une invitation au voyage au cœur de l’art hispano-mauresque
                </Card.Text>
                <Button variant="primary">Réserver</Button>
            </Card.Body>
            </Card>
        </div>
        </div>
    

  )
}

export default cards