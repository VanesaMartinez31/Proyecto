import React, { useState } from "react";
import { Card, CardBody, Container, Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { ITeams } from "../Types";



export const CreateTeam = () => {

    const [data, setData] = useState<ITeams>({

        name: "",
        members: [],
        leader: "",
        round: 0,
        grades: []

    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const tempoData: any = data;
        tempoData[e.target.name] = e.target.value;
        setData(tempoData)
    }

    const onSumbit = async () => {
        try {
            Swal.fire("Guardando datos");
            Swal.showLoading();
            await axios.post("http://localhost:4000/team/create", data)
            Swal.fire("Datos Guardados Correctamnete")
        } catch (error: any) {
            console.log(error)
            Swal.fire("Algo salio mal", error.response.data.msg);
        }
        
    }
    return (

        <Container >
            <Card style={{width: "50rem", margin: "auto"}}>
                <Card.Body className="mt-4">
                    
                    <Form className="text-center">
                        <Card.Title className="mb-3"> Registro de Equipos </Card.Title>
                        <Form.Group>
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control name="nombre" onChange={onChange} />
                        </Form.Group>
                        <Row className="mb-3">
                        <Form.Label>Participantes:</Form.Label>
                            <Col>
                                <Form.Group>
                                    
                                    <Form.Control name="Participantes" onChange={onChange} />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group>
                                    <Form.Control name="Participantes" onChange={onChange} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row >
                            <Col>
                                <Form.Group>
                                    <Form.Control name="Participantes" onChange={onChange} />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group>
                                    <Form.Control name="Participantes" onChange={onChange} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group >
                            <Form.Label>Lider:</Form.Label>
                            <Form.Control  name="Lider" onChange={onChange} />
                        </Form.Group>
                                               
                        <Button className="mt-3" onClick={() => onSumbit()}>ENVIAR</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>

    )
}