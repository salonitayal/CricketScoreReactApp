const API_KEY = "4zdaGW2HmhXM1l9SquA5XgIbdfM2";

// get all the matches [Upcoming matches]

export const getMatches = () => {
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log("ERROR:", error));
};

// get the scores 

export const getMatchDetail = (id) => {
    const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};