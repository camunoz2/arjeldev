---
title: "Pokememorize"
subtitle: "A memo pokecard game!"
slug: "pokememorize"
publishDate: "08 Nov 2022"
summary: "My kids love to play pokemon, then the desicion was already taken, i need to develop some kind of game for them, and they are the most ambitious clients. It's made in React + Tailwindcss, scaffolded with Vite and served on vercel."
cardColor: "#51b2d2"
projectLink: "https://pokememo-jade.vercel.app/"
githubLink: "https://github.com/camunoz2/pokememo"
usedStack: ["React", "Tailwindcss", "Typescript"]
featuredImage: "/images/projects/pokememorize/featured.webp"
portraitProjectImage: "/images/projects/pokememorize/portrait.webp"
landscapeProjectImages:
  [
    "/images/projects/pokememorize/landscape1.webp",
    "/images/projects/pokememorize/landscape2.webp",
  ]
---

# Pokememorize

### At least, my kids enjoy this!

My kids love to play pokemon, then the desicion was already taken, i need to develop some kind of game for them, and they are the most ambitious clients. It's made in React + Tailwindcss, scaffolded with Vite and served on vercel.

## Development

First we must install the dependencies with vite and typescript (obviously)

```
  npm create vite@latest
```

Then add tailwindcss to our project following its [docs](https://tailwindcss.com/docs/installation)

The pokemon list, names and sprites, were obtained trough the [pokeapi](https://pokeapi.co/).

```ts
const getPokemonCards = async (ids: number[]) => {
  let cards: PokemonCard[] = [];
  for (const id of ids) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let jsonData = await response.json();
    cards.push({
      name: jsonData.name,
      image: jsonData.sprites.front_default,
      isMatched: false,
      id: 0,
    });
  }
  return cards;
};
```

One of the important parts in this code is the boolean `isMatched` because this allows the conditional render of the card. When `isMatched === true` , then the card is facing up.

The other important function is the useEffect that allows tha pairing of the cards.

```ts
useEffect(() => {
  if (firstChoice && secondChoice) {
    setTurn((turn) => turn + 1);

    if (firstChoice.name === secondChoice.name) {
      matchPairs(firstChoice.name);
      setTimeout(() => {
        resetCards();
      }, 1000);
    } else {
      setTimeout(() => {
        resetCards();
      }, 1000);
    }
  }
}, [firstChoice, secondChoice]);
```

In this particullar case, useEffect is called when we already have a secondTurn. If both cards are facing up, then we add a turn. When the names are equal, we have a matched pair. For this task we can use a ternary operation:

```ts
const cardSelector = (card: PokemonCard) => {
  firstChoice ? setSecondChoice(card) : setFirstChoice(card);
};
```

I hope you enjoyed the project 😊
Feel free to reach me on twitter at [@arjeldev](https://twitter.com/arjeldev)

See ya!
