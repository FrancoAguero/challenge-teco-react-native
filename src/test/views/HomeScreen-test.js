import React from "react";
import { render } from '@testing-library/react-native'
import HomeScreen from '../../views/HomeScreen'

let component;

describe("<HomeScreen/>", () => {
    beforeEach(() => {
        component = render(<HomeScreen/> )
    })

    it("Renderiza correctamente", () => {
        console.log(component)
    })
})