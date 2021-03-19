const { shallow } = require("enzyme/build")
const { GifGridItem } = require("../../components/GifGridItem")


describe('Pruebas en GifGrifdItems', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('Debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title)
    })
    test('debe tener la imagen igual al url y al de los props', () => {
        const img = wrapper.find('img');
        // console.log(src);
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })

    test('debe tener animate__animated ', () => {
        const div = wrapper.find('div');
        const className = div.prop('className')

        expect(className.includes('animate__animated')).toBe(true);
    })
    
    
    
    
})
