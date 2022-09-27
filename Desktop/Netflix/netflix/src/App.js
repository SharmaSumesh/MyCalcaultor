import {Component} from "react";
import './index.css';
class App extends Component{
    constructor()
    {
        super();
        this.state = {
            searchdata:{}
        }
    }
    search = (key)=>{
        console.log(key)
        if(key=12)
        { 
            console.log("error")
        }
        fetch('https://reqres.in/api/users/'+key).then((data) => {
            data.json().then((resp)=>{
                console.log(resp.data);
                this.setState({searchdata:resp.data});
            })
        })
     }
     componentDidUpdate()
     {
        console.log(this.state);
     }
    render()
    {
        return (
            <div>
                <h1>Please Enter the Id </h1>
                <input type="number"  placeholder = "enter the id" onChange={(event)=>this.search(event.target.value)}/>
                <div>
                    {
                        <div className="conatainer-fluid mt-5">
                            <h2>Yours Data</h2>
                            <div className = "row text-center">
                                <div className = "col-10 col-md-4 mt-5">
                                    <div className = "card p-2">
                                        <div className = "d-flex align-items-center">
                                            <div className = "image"><img src={this.state.searchdata.avatar} className="rounded" width="150"/></div>
                                            <div className = "ml-3 w-100">
                                                {/* <h4 className = "mb-0 mt-0 textleft">{this.state.searchdata.first_name}</h4> */}
                                                <div className = "p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                    <div className = "d-flex  flex-column"><span className = "first_name">Name<br/>{this.state.searchdata.first_name}</span></div>
                                                    <div className = "d-flex flex-column"><span className = "last_name">Last Name<br/>{this.state.searchdata.last_name}</span></div>
                                                    <div className = "d-flex flex-column"><span className = "Email">Email<br/>{this.state.searchdata.email}</span></div>

                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        

                        
                    }
                </div>
                
            </div>

        )
    }
}
export default App;