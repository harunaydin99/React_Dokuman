import React, {Component} from 'react';
import './App.css';
import Select from "./Select";
import Text from "./Text";
import Finish from "./Finish";
import DocumentDatas from './JSONS/Windows10Guncelleme.json';
import { Button, ButtonGroup } from 'reactstrap';

class App extends Component {
    state = {
        control: 0,
        cevap: '',
        kontrol :0,
        currentid :0
    }

    idPlusOK = (e) =>{
/*        this.setState({
            currentid:(Math.floor(this.state.currentid)) + 1
        })*/
        this.setState({
            currentid: DocumentDatas[this.state.currentid].selectOK
        })
    }
    idPlusPositive = (e) =>{
        /*        this.setState({
                    currentid:(Math.floor(this.state.currentid)) + 1
                })*/
        this.setState({
            currentid: DocumentDatas[this.state.currentid].selectPositive
        })
    }
    idPlusNegative = (e) =>{
        /*        this.setState({
                    currentid:(Math.floor(this.state.currentid)) + 1
                })*/
        this.setState({
            currentid: DocumentDatas[this.state.currentid].selectNegative
        })
    }

  render() {
    return (
        <div>
            <div className="geneldiv">

{/*            {
                this.state.dictionary[this.state.currentid].data
            }*/}

                {
                    <h2>{DocumentDatas[this.state.currentid].data}</h2>   /// this.state.dictionary["0"].data   gibi
                }

                {
                    DocumentDatas[this.state.currentid].selectable === true ? <Select handleClickNo={this.idPlusNegative} handleClickYes={this.idPlusPositive}></Select>
                        : DocumentDatas[this.state.currentid].selectable === false ? <Text handleClick={this.idPlusOK}></Text>
                        : <Finish></Finish>
                }



{/*            {this.state.dictionary.map(name => (
                <li>
                    {name.data}
                </li>
            ))}*/}

            {/*<Text takedata={this.state.dictionary[0].data}></Text>*/}
            </div>
        </div>
    );
  }
}

export default App;




/*        dictionary: [
            {
                id: 0,
                data: "Windows 10 Güncelleştirme Dökümanı",
                checked: false
            },
            {
                id: 1,
                data: "Bilgisayarınız güç kaynağına bağlı mı ?",
                checked: true
            },
            {
                id: 2,
                data: "Bilgisayarınızı güç kaynağına bağlayınız",
                checked: false
            },
            {
                id: 3,
                data: "Bilgisayarınız açık mı ?",
                checked: true
            },
            {
                id: 4,
                data: "Bilgisayarınızı açınız",
                checked: false
            }
        ]*/


/*        dictionary : {
            0 : {
                data: "Windows 10 Güncelleştirme Dökümanı",
                selectable: false,
                selectOK: 1,
            },
            100 : {
                data: "Bitti !!!!",
                selectable: 99
            },
            1 : {
                data:"Bilgisayarınız güç kaynağına bağlı mı ?",
                selectable: true,
                selectPositive: 3,
                selectNegative: 2
            },
            2 : {
                data: "Bilgisayarınızı güç kaynağına bağlayınız",
                selectable:false,
                selectOK: 3
            },
            3: {
                data:"Bilgisayarınız açık mı ?",
                selectable: true,
                selectPositive: 7,
                selectNegative: 4
            },
            4 : {
                data: "Bilgisayarınızı açınız",
                selectable:false,
                selectOK: 5
            },
            5: {
                data:"Bilgisayarınız açıldı mı ?",
                selectable: true,
                selectPositive: 7,
                selectNegative: 6
            },
            6 : {
                data: "Teknik servisten yardım alınız",
                selectable:false,
                selectOK: 100
            },
            7: {
                data:"Bilgisayarınızın versiyonu Windows 10 mu ?",
                selectable: true,
                selectPositive: 9,
                selectNegative: 8
            },
            8 : {
                data: "Bu döküman Windows 10 sürümü içindir. Kendi sürümünüz için olan dökümana gidiniz",
                selectable:false,
                selectOK: 100
            },
            9: {
                data:"Bilgisayarınız internete bağlı mı ?",
                selectable: true,
                selectPositive: 11,
                selectNegative: 10
            },
            10 : {
                data: "İnternete bağlı olmadan güncelleştirmeler yüklenemez. Lütfen bilgisayarınızın internete bağlı olduğundan emin olun",
                selectable:false,
                selectOK: 100
            },
            11 : {
                data: "Sol altta bulunan Başlat butonuna tıklayınız",
                selectable:false,
                selectOK: 12
            },
            12 : {
                data: "Başlat Menüsünden Ayarlar butonuna tıklayınız",
                selectable:false,
                selectOK: 13
            },
            13 : {
                data: "Çıkan Menüde Güncelleştirme ve Güvenlik butonuna tıklayınız",
                selectable:false,
                selectOK: 14
            },
            14: {
                data:"Güncelleştirmeleri denetle butonu var mı ?",
                selectable: true,
                selectPositive: 16,
                selectNegative: 15
            },
            15 : {
                data: "Şimdi yükle butonuna basınız",
                selectable:false,
                selectOK: 19
            },
            16 : {
                data: "Ekranda açılan 'Güncelleştirmeleri Denetle' butonuna tıklayınız",
                selectable:false,
                selectOK: 17
            },
            17: {
                data:"Yeni güncelleştirmeler var mı ?",
                selectable: true,
                selectPositive: 15,
                selectNegative: 18
            },
            18 : {
                data: "Bilgisayarınız kullanıma hazırdır",
                selectable:false,
                selectOK: 100
            },
            19 : {
                data: "Güncelleştirmeler indikten sonra ekranınızda yeniden başlatınız uyarısı göreceksiniz",
                selectable:false,
                selectOK: 20
            },
            20 : {
                data: "Bilgisayarınızı yeniden başlatın.(Veri kaybı yaşamamak için açık olan dökümanlarınızı kaydediniz)",
                selectable:false,
                selectOK: 18
            }
        }*/
