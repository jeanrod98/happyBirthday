import React from 'react'
import "../css/estilos.css";

import imagenIron from '../img/superPapa.jpg'
import marvel from '../sound/marvel.mp3'

function regalo() {
   
 
        
  
    return (
        <div className="regalo">
            <div className="imagen">

            <img id="img-ironman" src={imagenIron} alt="Iron Man" />
            </div>
            <div className="dedicatoria">
            <h5>Bienvenido Señor Stark…</h5>
                <p>Es necesario que entiendas la importancia de tenerte en nuestras vidas, es muy importante que comprendas lo valioso que eres para todos los que tenemos el privilegio de conocer la calidad de persona que eres. Hay muchas personas que no demuestran su personalidad, su criterio y su carácter solo por encajar en la sociedad.<br/><br/>
Gracias a Dios porque no eres una de esas personas…<br/><br/>
Quizás a muchos no les agrade lo que dices, quizás a otros les impresionen tus capacidades, pero lo que realmente importa es la voluntad que tienes para ayudar a los demás. Padre doy gracias a Dios porque hoy te tengo con vida y gracias a ti puedo decir que no soy tan mala persona, gracias a tus consejos, tus enseñanzas y por demostrarme que aun si vivimos rodeados de gente mala, podemos ser la excepción.<br/><br/>
Y quizás te preguntes, ¿pero por qué la foto de Iron Man?, pues la respuesta es sencilla. Eres un superhéroe para mí, y para mí eres como Tony Stark (solo que con menos dinero claro jajaja), pero eso no es lo importante, ya que en lo que sí se parecen es en la capacidad que tienen ambos para dar soluciones aun cuando parecen no haberlas, el ingenio de salir de situaciones difíciles, la valentía para afrontar lo dura que puede ser la vida y por sobre todo la capacidad de amar y dar la vida por su familia.
</p>
<h6>" Un hermano es un consuelo. Un amigo es un tesoro. Un Padre es ambos " - Benjamin Franklin.</h6>
<h5>Feliz Cumpleaños Sr. Stark</h5>
            </div>
            <audio src={marvel} autoPlay></audio>
        </div>
    )
}

export default regalo
