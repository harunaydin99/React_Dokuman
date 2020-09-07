import React, {Component} from 'react';
import './App.css';
import Select from "./Select";
import Text from "./Text";
import Finish from "./Finish";
import DocumentDatas from './JSONs/Windows10Guncelleme.json';


class App extends Component {
    state = {
        control: 0,
        cevap: '',
        kontrol :0,
        currentid :0,
        currentidback: 0,
        IDs : []
    }

    idPlusOK = (e) =>{
        this.setState({
            currentid: DocumentDatas[this.state.currentid].selectOK
        })
        this.state.IDs.push(this.state.currentid)
    }
    idPlusPositive = (e) =>{
        /*        this.setState({
                    currentid:(Math.floor(this.state.currentid)) + 1
                })*/
        this.setState({
            currentid: DocumentDatas[this.state.currentid].selectPositive
        })
        this.state.IDs.push(this.state.currentid)
    }
    idPlusNegative = (e) =>{
        /*        this.setState({
                    currentid:(Math.floor(this.state.currentid)) + 1
                })*/
        this.setState({
            currentid: DocumentDatas[this.state.currentid].selectNegative
        })
        this.state.IDs.push(this.state.currentid)
    }

    turnBackbutton = (e) =>{
        this.setState({
            currentid : this.state.IDs[this.state.IDs.length-1]
        })
        this.state.IDs.splice(-1,1)
    }

  render() {
    return (
        <div>
            <div className="geneldiv">

                {
                    DocumentDatas[this.state.currentid].img !== "" ? <div style={{width:"300px", height:"200px", marginLeft:"190px"}}><img src={DocumentDatas[this.state.currentid].img} alt="logo"/></div> : <div style={{width:"300px", height:"200px"}}></div>
                }
                {
                    <h2>{DocumentDatas[this.state.currentid].data}</h2>   /// this.state.dictionary["0"].data   gibi
                }
                {
                    DocumentDatas[this.state.currentid].selectable === true ? <Select handleClickNo={this.idPlusNegative} handleClickYes={this.idPlusPositive}></Select>
                        : DocumentDatas[this.state.currentid].selectable === false ? <Text handleClick={this.idPlusOK}></Text>
                        : <Finish></Finish>
                }
                {
                    this.state.currentid !== 0 ? <button className="btn-1" onClick={this.turnBackbutton}><i className="fas fa-backward"></i> Geri</button> : null
                }

            </div>
        </div>
    );
  }
}

export default App;

