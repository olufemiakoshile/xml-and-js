const clientId = `0211484bbb66452e948ed797b0e9d3db`;
const clientSecret = `743da39a8c4d462d8dc22402e03f6786`;

let _data = [];

const getToken = async () => {
    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
        },
        body: "grant_type=client_credentials",
    });

    const data = await result.json();
    return data.access_token;
};

const getGenres = async (token) => {
    const result = await fetch(
        `https://api.spotify.com/v1/browse/categories?locale=sv_US`,
        {
            method: "GET",
            headers: { Authorization: "Bearer " + token },
        }
    );

    const data = await result.json();
    return data.categories.items;
};

const getPlaylistByGenre = async (token, genreId) => {
    const limit = 10;

    const result = await fetch(
        `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
        {
            method: "GET",
            headers: { Authorization: "Bearer " + token },
        }
    );

    const data = await result.json();
    return data.playlists ? data.playlists.items : [];
};

const loadGenres = async () => {
    const token = await getToken();
    const genres = await getGenres(token);

    _data = await Promise.all(
        genres.map(async (genre) => {
            const playlists = await getPlaylistByGenre(token, genre.id);
            return { ...genre, playlists };
        })
    );
};

const renderGenres = (filterTerm) => {
    let source = _data;

    if (filterTerm) {
        console.log(filterTerm);
        const term = filterTerm.toLowerCase();
        source = source.filter(({ name }) => {
            console.log(name.toLowerCase().includes(term));
            return name.toLowerCase().includes(term);
        });
    }

    const list = document.getElementById(`genres`);

    const html = source.map(({ name, id, icons: [icon], playlists }) => {
        const playlistsList = playlists
            .map(
                ({
                    name,
                    external_urls: { spotify },
                    images: [image],
                    description,
                }) => {
                    return `
          <li id="playlist">
            <a href="${spotify}" alt="${name}" target="_blank">
              <img src="${image.url}" width="180" height="180"/>
            </a>
            <div>
            <h3>${name}</h3>
            <h2>${description}</h2>
            </div>
          </li>`;
                }
            )
            .join(``);

        if (playlists) {
            return `
        <article>
        <div class="genre-block" onclick="openList(${name})">
          <img class="genre-image" src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
            <h2>${name}</h2>
          </div>
            <ol class="hide" id="${name}">
              ${playlistsList}
            </ol>
        </article>`;
        }
    });

    list.innerHTML = html;
};

loadGenres().then(renderGenres);

const onSubmit = (event) => {
    event.preventDefault();

    const term = event.target.term.value;

    renderGenres(term);
};