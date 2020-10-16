import React, { Component } from 'react';
import './App.scss';
import Car from './img/car.jpg';
import View from './components/View';
import firebase from './util/firebase';
class App extends Component {
constructor(){
  super();
  this.state={
    PickUpAdress:'',
    DropOffAdress:'',
    name:'',
    number:'',
    date:'',
    time:'',
    labour:'',
    vehicle:'',
    comment:'',
    price:''
  }
}



handleChange=e=>{
  this.setState({
    [e.target.name]:e.target.value
  })
}


handleSubmit=e=>{
    const {date,adress,DropOffAdress,PickUpAdress,vehicle,labour,price}=this.state;

    const db = firebase.firestore();
     db.collection("retail").add({
      date: date,
      PickUpAdress: PickUpAdress,
      DropOffAdress:DropOffAdress,
      vehicle:vehicle,
      labour:labour,
      price:price
    })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });

  console.log(this.state);
  
    this.setState({
      PickUpAdress:'',
      DropOffAdress:'',
      name:'',
      number:'',
      date:'',
      time:'',
      labour:'',
      vehicle:'',
      comment:'',
      price:''
    })

  e.preventDefault()
}

  render(){
  return (
    <div className="container-fluid p-3">
       <div className="row">
           <div className="col-lg-2 col-md-2 d-none d-lg-block">
               <div className="bg-secondary icons mx-auto">
                    <span className="icon-container"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></span>
                    <span  className="icon-container"><i className="fa fa-home" aria-hidden="true"></i></span>
                    <span  className="icon-container"><i className="fa fa-qrcode" aria-hidden="true"></i></span>
                    <span  className="icon-container"><i className="fa fa-gift" aria-hidden="true"></i></span>
                    <span  className="icon-container"><i className="fa fa-question-circle-o" aria-hidden="true"></i></span>
                    <span  className="icon-container"><i className="fa fa-paper-plane" aria-hidden="true"></i></span>
                    <span  className="icon-container"><i className="fa fa-truck" aria-hidden="true"></i></span>
                    <span  className="icon-container"><i className="fa fa-money" aria-hidden="true"></i></span>
                    <span  className="icon-container"><i className="fa fa-book" aria-hidden="true"></i></span>
                    <span  className="icon-container"><i className="fa fa-shopping-basket" aria-hidden="true"></i></span>
                    <span  className="icon-container"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                    <span  className="icon-container"><i className="fa fa-refresh" aria-hidden="true"></i></span>
               </div>
           </div>
           <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
               <h1><span className="text-primary"><b>Droppa</b></span> for Business</h1>
               <div className=" bg-white p-2">
                 <div className="bg-primary p-1">
                    <h6 className="text-center text-white">Retail Booking</h6>
                 </div>
                 <form className="row" onSubmit={this.handleSubmit}>
                     <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Pick up Adress</label>
                          <input type="text" className="form-control" onChange={this.handleChange} name="PickUpAdress" value={this.state.PickUpAdress} aria-describedby="emailHelp"/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Name</label>
                          <input type="text" className="form-control" onChange={this.handleChange} name="name" value={this.state.name}/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Phone Number</label>
                          <input type="text" className="form-control" onChange={this.handleChange} name="number" value={this.state.number}/>
                        </div>
                        <div className="row">
                        <div className="col">
                        <label htmlFor="exampleInputPassword1">Pick Up Date</label>
                          <input type="date" className="form-control" placeholder="Select Date" onChange={this.handleChange} name="date" value={this.state.date}/>
                        </div>
                        <div className="col">
                        <label htmlFor="exampleInputPassword1">Pick Up Time</label>
                          <input type="time" className="form-control" placeholder="Select Time" onChange={this.handleChange} name="time" value={this.state.time}/>
                        </div>
                      </div>
                      <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Number of Labour</label>
                          <select value={this.state.labour} name="labour" onChange={this.handleChange} className="custom-select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                          </select>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                       <div className="form-group p-3">
                          <img src={Car} className="img-responsive m-1" width="300px" height="200px" alt="car"/>
                           <select value={this.state.vehicle} name="vehicle"  onChange={this.handleChange} className="custom-select">
                              <option value="mini van" >Mini van</option>
                              <option value="coursa mini van" >Coursa mini van</option>
                           </select>
                       </div>
                     </div>
                     <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                     <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Drop off Adress</label>
                          <input type="text" className="form-control" onChange={this.handleChange} name="DropOffAdress" value={this.state.DropOffAdress} aria-describedby="emailHelp"/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Price</label>
                          <select value={this.state.price} name="price" onChange={this.handleChange} className="custom-select">
                              <option value="250" >R250</option>
                              <option value="450">R450</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Phone Number</label>
                          <input type="number" className="form-control"onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <textarea placeholder="comment" className="form-control" onChange={this.handleChange} name="comment" value={this.state.comment}></textarea>
                        </div>
                      </div>
                      <div className="m-auto">
                         <button type="submit" className="btn btn-info btn-block">Submit</button>
                      </div>
                 </form>
               </div>
              <View/>
           </div>
       </div>
    </div>
  );
}
}

export default App;
