import { shallow } from "enzyme/build";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs.js");

describe("Pruebas en el gifGrid", () => {
  const category = "Drago Ball";

  test("debe de mostrarse correcatmente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de mostrar items cunado se cargan imagenes userFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/cualquiercosa.jpg",
        title: "cualquier cosa",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);

    // expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("p").exists()).toBe(false);

    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
  });
});
