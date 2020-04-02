function renderHtmlBefore(name, description, cost, rating, uses, toMarket) {
    return `
        <article>
            <header>
                Name: <h1>${name}</h1>
            </header>
            <section>
                Description: ${description}
            </section>
            <section>
                Cost: ${cost}
            </section>
            <section>
                Rating: ${rating}
            </section>
            <section>
                Uses: ${uses}
            </section>
            <section>
                Introduced To Market: ${toMarket}
            </section>
        </article>
    `;
};

function renderHtmlAfter(fruit) {
    return `
        <article>
            <header>
                Name: <h1>${fruit.name}</h1>
            </header>
            <section>
                Description: ${fruit.description}
            </section>
            <section>
                Cost: ${fruit.cost}
            </section>
            <section>
                Rating: ${fruit.rating}
            </section>
            <section>
                Uses: ${fruit.uses}
            </section>
            <section>
                Introduced To Market: ${fruit.toMarket}
            </section>
        </article>
    `;
};

const fruit = {
    name: "Apple",
    description: "Red Delicious",
    cost: "$1.15",
    rating: "*****",
    uses: "Snacking, Salads",
    toMarket: "1874"
};

const before = renderHtmlBefore("Apple", "Red Delicious", "$1.15", "*****", "Snacking, Salads", "1874");
const after = renderHtmlAfter(fruit);

console.log(before);
console.log(after);
