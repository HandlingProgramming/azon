
import React , {Component} from "react";
import './Services.css'
export default class Model2  extends Component {
    render (){
       let modelstyle ={
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0,8)', 
        }
        return(
          <div className="modal show fade" style={modelstyle}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title"> {this.props.title} </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.props.hide}></button>
                </div>
                <div className="modal-body">
                    {/* <img src={this.props.img} className="img-fluid"/> */}
                    <p> {this.props.desc} </p>
                </div>
                </div>
            </div>
        </div>
        )
    }
}











