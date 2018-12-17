import * as React from 'react';
import {Component} from 'react';
import { Col,Grid,Row } from "react-bootstrap";
import '../index.css'
import {IApp} from '../model'




interface IRecomAppProps{
    recomapplist:IApp[],
    getrecom: () => void
}


export class RecomApp extends Component<IRecomAppProps>{
    constructor (props:IRecomAppProps){
        super(props)
    }

    public componentWillMount(){
        this.props.getrecom()
    }

    public render(){
        return <div>
            <Grid>
              <Row>
                <div className="scrollcontainer">
                  {this.props.recomapplist.map(item => (
                    <div className="card">
                      <Col xs={12} md={12}>
                        <img className='roundcon' src={item.imageurl} />
                        <div>
                          <h5>{item.name}</h5>
                          <p>{item.category}</p>
                        </div>
                      </Col>
                    </div>
                  ))}
                </div>
              </Row>
            </Grid>
          </div>;
    }

}

