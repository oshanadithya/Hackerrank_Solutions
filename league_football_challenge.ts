const https = require('https');
const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding("ascii");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (chunk) {
    inputString += chunk;
});
process.stdin.on("end", function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

const fetch = (year, page) => {
    let url = `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${page}`;
    return new Promise((resolve, reject) => {
        https
            .get(url, (resp) => {
                let data = '';
                // A chunk of data has been received.
                resp.on('data', (chunk) => {
                    data += chunk;
                });
                // The whole response has been received. Join all the chunks and parse them as JSON
                resp.on('end', () => {
                    resolve(JSON.parse(data));
                });
            })
            .on('error', (err) => {
                reject(err.message);
            });
    });
};

async function getTeams(year, k) {
    // teams data is unknown so defining an empty object
    let matchesperteam = {};

    try {
        // Initialize the page count = 1 before getting the page count and update it after getting the page count
        let totalpagecount = 1;
        let pagecount = 1;
        while (pagecount <= totalpagecount) {
            const singlematchdata = await fetch(year, pagecount);
            // update the total page count
            totalpagecount = singlematchdata.total_pages;
            pagecount++;
            // counting the number of matches per team
            singlematchdata.data.forEach(match => {
                matchesperteam[match["team1"]] = (matchesperteam[match["team1"]] || 0) + 1;
                matchesperteam[match["team2"]] = (matchesperteam[match["team2"]] || 0) + 1;
            });
        }
        // Push only the teams that have played at least k matches
        let result = [];
        for (let team in matchesperteam) {
            if (matchesperteam[team] >= k) {
                result.push(team);
            }
        }
        // return the sorted teams
        return result.sort();
    } catch (err) {
        console.log(err);
    }
}

async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const year = parseInt(readLine()?.trim());
    const k = parseInt(readLine()?.trim());

    const teams = await getTeams(year, k);

    for (const team of teams) {
        ws.write(`${team}\n`);
    }

    ws.end();
}

main();