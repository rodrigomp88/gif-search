import React from "react";
import { shallow } from "enzyme/build";
import { GifExpertApp } from "../GifExpertApp";

describe("Pruebas en GifExpertApp", () => {
  test("debe msotrar correctamente", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar una lisra de categorias', () => {
      const categories = ['Dragon Ball', 'One Punch'];
      const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)

      expect(wrapper.find('GifGrid').length).toBe(categories.length)
  })
  
});
