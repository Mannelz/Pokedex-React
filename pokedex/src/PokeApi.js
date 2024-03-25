export const ProcurarPor = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const resposta = await fetch(url);
    return await resposta.json();
  } catch (error) {
    console.log("Falha na pesquisa: ", error);
  }
};

export const PegarPokemons = async (inicio = 0, fim = 10) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${fim}&offset=${inicio}`;
    const resposta = await fetch(url);
    return await resposta.json();
  } catch (error) {
    console.log("Falha em pegar os pokémons: ", error);
  }
};