import React, { useState, useEffect } from 'react'

export const Preferences = ({ gender, onChange } ) => {

    const [genderSelected, setGenderSelected] = useState(gender)

    useEffect(() => {
        onChange(genderSelected)
    }, [genderSelected])

    return (
        <div class="wrap">
            <form action="" class="formulario">
                <div class="radio">
                    <p>Qué estas buscando?</p>
                    <hr />

                    <input cheked={genderSelected =='F'} onChange={ e => setGenderSelected(e.target.value) } type="radio" name="sexo" id="gatos" value="M"/>
                    <label for="gatos">Gatos</label>

                    <input cheke d={genderSelected =='M'} onChange={ e => setGenderSelected(e.target.value) } type="radio" name="sexo" id="gatas" value="F"/>
                    <label for="gatas">Gatas</label>

                </div>
            </form>
        </div>
    )
}
