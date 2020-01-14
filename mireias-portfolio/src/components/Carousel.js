import React from 'react'; //we will always do this
import Card from  '../components/Card';

import github from '../assets/github.png';
import mireia from '../assets/Mireia.jpg';
import boost from '../assets/boost.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component { //we will always do this

    constructor(props) {

        super(props);
        this.state = {

            items: [

            { 
                id: 1,
                title: 'My GitHub',
                subTitle: 'Find all my GitHub projects!',
                imgSrc: github,
                link: 'https://github.com/Mireia17',
                selected: false
            },

            {
                id: 2,
                title: 'Me',
                subTitle: 'My professional experience',
                imgSrc: mireia,
                link: 'https://www.linkedin.com/in/mireia-palmero/',
                selected: false

            },

            {
                id: 3,
                title: 'BoostIt',
                subTitle: 'Checkout boostit!',
                imgSrc: boost,
                link: 'https://boostit.herokuapp.com/',
                selected: false

            }, 

            ]

        }

    }

        handleCardClick = (id, card) => { //we are creating this inside the component (class)
            console.log(id);

            let items = [...this.state.items];
            

            items[id].selected = items[id].selected ? false : true; // we use this so we can toggle on the images
            

             items.forEach(item => {

                if (item.id !== id) {

                    item.selected = false;
                }

            });


            this.setState({
                items
            });
        }

            makeItems = (items) => { //CHEKOUT THIS PART HERE

                return items.map(item => {

                    return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key = {item.id} /> 
                
                });
            }

        render() { //with this we are rendering something

            return (
                <Container fluid={true}> {/*this is a bootsrap element*/}

                    <Row className='justify-content-around'>
                        {this.makeItems(this.state.items)} {/*CHECKOUT THIS PART*/}


                    </Row>
                </Container>
              
            );
        }

}

export default Carousel; //we will always do this 