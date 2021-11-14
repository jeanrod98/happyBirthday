import React, { useState, useEffect } from 'react'
import {Spinner} from 'react-bootstrap'
import Regalo from "./regalo";
// reconocimiento de voz
import SpeechRecognition, {
    useSpeechRecognition,
  } from "react-speech-recognition";

function Presentacion() {
     // estados de la app 
     const [espiner, setespiner] = useState(true)

    setTimeout(() => {
        setespiner(false)
    }, 3000);

    // reconocimiento de voz
  const { transcript, resetTranscript } = useSpeechRecognition();
  const startListening = () => {
    SpeechRecognition.startListening({ continuous: false, language: "es-EC" });
    // console.log(transcript);
  };
  const stopListening = () => {
    SpeechRecognition.stopListening();
    console.log('primero');
    console.log(transcript);
    if(transcript == 'yo soy Iron'){
        localStorage.setItem('permiso', true)
    }
  };
  

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    //   alert('no soportado')
    return null;
  }

//   /consulta a local storage
const confReconocimiento = localStorage.getItem('permiso')
console.log(confReconocimiento);
    return (
        <div className="presentacion">
            
                {confReconocimiento == 'true' ?
                <Regalo remover={true}/>
                :
                <>
                {espiner 
                    ?
                    <div className="carga">
                    <Spinner className="activo" id="spinner" animation="border" variant="info" /> 
                    </div>
                    : 
                    <>
                    <div className="frase">
    
                        <h4 id='pregunta'>Diga en voz alta lo que dice Tony Stark en su primera película, cuando da a conocer al mundo que él es Iron Man (su frase célebre).</h4>           
                        
                    </div>
                    <div className="grabar">
                    <button
                      id="btn-grabar"
                      onTouchStart={startListening}
                      onMouseDown={startListening}
                      onTouchEnd={stopListening}
                      onMouseUp={stopListening}
                    >
                      <ion-icon name="mic"></ion-icon>
                    </button>
                    <p>¡Manten pulsado el boton para hablar!</p>
                  </div>
                  {/* <p>{transcript}</p> */}
                  </>
                    }
                    </>
                }
        </div>
    )
}

export default Presentacion
