import React, {Component} from 'react';

class Text extends Component {
    state = {
        deger: 0
    }
/*    state = {
        texts: [
            {
                textid: 0,
                textdata: "Windows 10 Güncelleştirme Dökümanı"
            },
            {
                textid: 1,
                textdata: "Bilgisayarınızı güç kaynağına bağlayınız"
            },
            {
                textid: 2,
                textdata: "Bilgisayarınızı açınız"
            },
            {
                textid: 3,
                textdata: "Bu döküman Windows 10 sürümü içindir. Kendi sürümünüz için olan dökümana geçiniz"
            }
        ]
    }*/
    handleClick = (e) =>{
        this.props.handleClick()
    }

    render() {
        return (
            <div>

                <div>
                    <button onClick={this.handleClick}>Tamam</button>
                </div>
            </div>
        );
    }
}

export default Text;