import React,{Component} from 'react';
import firebase from '../util/firebase';

export default class View extends Component{
constructor(){
    super();
    this.state={
        data:[]
    }
}

componentDidMount(){

    const db = firebase.firestore();

    db.collection("retail").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            const datas=[];
            datas.push({...doc.data(),id:doc.id})
            this.setState({
                data:datas
            })
        });
    });
}

onDeleteHandler=(id)=>{
    const {data}=this.state;
    const db = firebase.firestore();
    db.collection("retail").doc(id).delete()
}


    render(){
        console.log(this.state.data.map(item=>item.id));
        return(
            <div className="bg-white mt-2">
            <div className="bg-primary p-1">
                <h6 className="text-center text-white">Dropp Off Address(s)</h6>
            </div>
            <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Pick Up Address</th>
                    <th scope="col">Drop Off Adress</th>
                    <th scope="col">Vehicle Type</th>
                    <th scope="col">Labour(s)</th>
                    <th scope="col">Price</th>
                    <th scope="col">remove</th>
                  </tr>
                </thead>
                <tbody>
                    {
                      this.state.data.map(item=>(
                          <tr key={item.id}>
                              <td>{item.date}</td>
                              <td>{item.PickUpAdress}</td>
                              <td>{item.DropOffAdress}</td>
                              <td>{item.vehicle}</td>
                              <td>{item.labour}</td>
                              <td>{item.price}</td>
                              <td><button className="btn btn-info" onClick={this.onDeleteHandler.bind(this,item.id)}>Delete</button></td>
                          </tr>
                      ))
                    }
                </tbody>
             </table>
         </div>
        )
    }
} 