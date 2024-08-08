// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
    { title: "Super Freak", artist: "Rick James", genre: "R&B"},
    { title: "Mr. Blue Sky", artist: "Electric Light Orchestra", genre: "Pop"},
    { title: "Badlands", artist: "Bruce Springsteen", genre: "Rock  "},
    { title: "Ain't No Sunshine", artist: "Bill Withers", genre: "R&B"},
    { title: "Reunited", artist: "Peaches & Herb", genre: "R&B"},
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Pop",
    "Gamora": "Rock",
    // Add preferences for Drax, Rocket, and Groot
    "Drax": "Rock",
    "Rocket": "R&B",
    "Groot": "R&B",
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    return guardians.map(guardians => {
        const playlist = songs.filter(song => sessionStorage.genre === guardian.prefferedGenre);

        // Return an object with the guardian's name and their playlist
        return {
            guardianName: guardian.name,
            playlist: playlist
        };
    });
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


