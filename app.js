const express = require('express');
const app = express();
const port = 3000;

function gerarListaDeShows() {
    const shows = [
        {
            nome: 'Show 1',
            data: '10/06/2023',
            hora: '20:00',
            local: 'Teatro Municipal',
            valor_ingresso: 50.00,
        },
        {
            nome: 'Show 2',
            data: '15/06/2023',
            hora: '19:30',
            local: 'Centro de Convenções',
            valor_ingresso: 80.00,
        },
        {
            nome: "Show 3",
            data: "20/06/2023",
            hora: "21:00",
            local: "Ginásio Esportivo",
            valor_ingresso: 35.00
        },
        {
            nome: "Show 4",
            data: "25/06/2023",
            hora: "18:30",
            local: "Praça Central",
            valor_ingresso: 20.00
        },
        {
            nome: "Show 5",
            data: "30/06/2023",
            hora: "20:30",
            local: "Auditório Universitário",
            valor_ingresso: 45.00
        },
        {
            nome: "Show 6",
            data: "05/07/2023",
            hora: "19:00",
            local: "Teatro de Artes",
            valor_ingresso: 60.00
        },
        {
            nome: "Show 7",
            data: "10/07/2023",
            hora: "20:00",
            local: "Centro de Eventos",
            valor_ingresso: 75.00
        },
        {
            nome: "Show 8",
            data: "15/07/2023",
            hora: "21:30",
            local: "Arena Esportiva",
            valor_ingresso: 40.00
        },
        {
            nome: "Show 9",
            data: "20/07/2023",
            hora: "18:00",
            local: "Praia Central",
            valor_ingresso: 25.00
        },
        {
            nome: "Show 10",
            data: "25/07/2023",
            hora: "19:30",
            local: "Centro Cultural",
            valor_ingresso: 55.00
        }
    ];

    const listaDeShows = [];

    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * shows.length);
        listaDeShows.push(shows[randomIndex]);
    }

    return listaDeShows;
}

app.get('/', (req, res) => {
    const listaDeShows = gerarListaDeShows();
    res.json(listaDeShows);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
