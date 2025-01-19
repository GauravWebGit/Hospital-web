import React from 'react';
import {Card,CardBody,CardTitle,CardSubtitle,CardText,Button} from "reactstrap"

function List({data}) {
    
    return (
        <div>
            {
                data.map((o, i) => {
                    return (
                        <>
                            <Card
                            >
                                <CardBody>
                                    <CardTitle tag="h5">
                                         {o.id}
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        {o.name}
                                    </CardSubtitle>
                                    <CardText>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </CardText>
                                    <Button>
                                    Button
                                    </Button>
                                </CardBody>
                            </Card>
                        </>
                    )
                })
            }
        </div>
    );
}

export default List;