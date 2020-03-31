import React from 'react'

export const Preferences = () => (
    <div class="wrap">
        <form action="" class="formulario">
            <div class="radio">
                <p>Qué estas buscando?</p>
 
                <input type="radio" name="sexo" id="gatos"/>
                <label for="gatos">Gatos</label>

                <input type="radio" name="sexo" id="gatas"/>
                <label for="gatas">Gatas</label>
        
                <input type="radio" name="sexo" id="otros"/>
                <label for="otros">Otros</label>
            </div>
        </form>
    </div>
)
