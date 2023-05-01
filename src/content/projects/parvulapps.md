---
title: "Parvulapps"
subtitle: "A webapp for evaluating children 5 to 7 yo"
slug: "Parvulapps"
publishDate: "15 Nov 2022"
summary: "This is a webapp made for evaluating childrens according to the chilean curriculum, but it can be extensible to other countries as well, because the learning material is almost universal at least in the occidental educational system. "
cardColor: "#63768D"
projectLink: "https://parvulapps.vercel.app/"
githubLink: "https://github.com/camunoz2/parvulapps"
usedStack: ["NextJs", "Tailwindcss", "Typescript", "MySQL", "Prisma"]
featuredImage: "/images/projects/parvulapps/featured.webp"
portraitProjectImage: "/images/projects/parvulapps/portrait.webp"
landscapeProjectImages:
  [
    "/images/projects/parvulapps/landscape1.webp",
    "/images/projects/parvulapps/landscape2.webp",
  ]
---

# Parvulapps

### Micro SaaS for education and measurement

The ed tech is one of my favourite topics, maybe because i am a teacher and want to contribute to education, but also, because i am a father and want to contribute to the education of my kids. Since i was teaching in school, and later i was in charge of the school online platform, the profesionalism and dedication of the teacchers of the little ones, were out of this world. But they never had the oportinity of workin with a proper software for internal measurements of their childrens outcomes, so, i develop and MVP for this idea, and the teachers agreed on its use, and maybe the expansion of this tool to other schools as well.

## Development

The project was developed in `Next` because i wanted to explore all its fullstacks capabilities. This was the first time that i worked with mutations on server and client state, that was the motor that lead me to use the awesome `tastack-query` tool. This tool became handy, and i learn so much from its use, concept like invalidate cache, mutations, server-state vs client-state, refetching, query-keys.

Here is a example of how a mutation can be achieved and make sideffects all in a single function

```ts
const scoreMutation = useMutation({
  mutationFn: ({ value, id }: { value: number; id: number }) => {
    return fetch("/api/set-score", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        term: parseInt(router.query.evalType as string),
        objectiveId: id,
        value: value,
      }),
    });
  },
  onSuccess: () => queryClient.invalidateQueries(["objectives"]),
});
```

In the example above, first we make a `'POST'` request to the Next route with a body. The `term` must be a integer, so i parsed a route query, but i know this was not the best way of doing this, and maybe i fix this in the future (so, maybe never). When the mutation function is succesfull, i call invalidateQueries on a query key called 'objectives'

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

Some of the most complex task that i have to do, was making the database schema. Thats because i never have worked with a relational DB model before, so i needed some help with this. In general, my schema goes like this

```prisma
model Grade {
  id        Int       @id @default(autoincrement())
  classroom String
  section   String
  Students  Student[]
  teacher   User      @relation(fields: [teacherId], references: [id])
  teacherId String
  @@unique([classroom, section])
  @@index([teacherId])
}

model Student {
  id         Int         @id @default(autoincrement())
  name       String
  lastName   String
  rut        String
  Grade      Grade       @relation(fields: [gradeId], references: [id], onDelete: Cascade)
  gradeId    Int
  Objectives Objective[]
  @@index([gradeId])
}

model Objective {
  id              Int      @id @default(autoincrement())
  description     String   @db.VarChar(500)
  level           Int // nivel 1, 2 o 3
  ParentCore      Core     @relation(fields: [parentCoreId], references: [id])
  parentCoreId    Int // pertenece a un nucleo
  firstTermScore  Int
  secondTermScore Int
  thirdTermScore  Int
  Student         Student? @relation(fields: [studentId], references: [id], onDelete: Cascade)
  studentId       Int?
  @@index([parentCoreId])
}

```

I was thinking of switching the scores out of the Objective table, but, since i needed to show the objectives and its scores in a loop, in this way i prevented some extra request to the server.

Feel free to reach me on twitter at [@arjeldev](https://twitter.com/arjeldev)
