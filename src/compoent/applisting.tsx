import * as React from 'react';
import {Component}from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {Col, Grid, Row} from 'react-bootstrap'
import '../index.css'




import {IApp} from '../model'


interface IAppListProps {
    
    applist:IApp[],
    getranking: () => void,
   
    

}

 export class Applist extends Component<IAppListProps>{
     constructor(props:IAppListProps){
         super(props);
         
     }
  
     public componentWillMount(){
         this.props.getranking()
     }
      
    public render(){


        // const imgclass = this.props.applist.map((item,index) =>(
        //    ((index+2)%2) !== 0 ? 'roundcon': 'circle' 
        // ) )

        return <Grid>
          
            <ListGroup>
              {this.props.applist.map((item,index)=> (
                <ListGroupItem >
                  <Row >
                      <Col xs={12} md={6} className="imggrid">
                       <p className='ranking'>{(index+1)}</p>
                  <img className={((index+2)%2) !== 1 ? 'roundcon': 'circle' }  src={item.imageurl} />
                  </Col>
                      <Col xs={12} md={6}>
                     
                  <h4>{item.name}</h4>
                  {"\n"}
                  <p style={{ fontSize: "15px", textAlign: "center" }}>
                    Category: {item.category}
                  </p>
                  {"\n"}
                  <p style={{ fontSize: "15px", textAlign: "center" }}>
                    Author: {item.author}
                  </p>
                  {"\n"}
                  <p style={{ fontSize: "15px", textAlign: "center" }}>
                    Summary: {item.summary}
                  </p>
                  </Col>
                  
                   </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Grid>

    }
}






    

