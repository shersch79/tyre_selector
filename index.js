$(document).ready(function () {

    var rawLink = 'https://siroop.ch/baumarkt-garten/auto/reifen?';


    document.getElementById('submitSearch').onclick = function(){
        var saison = $('#top_features_Saison').find(":selected").val();
        var breite = $('#top_features_Reifenbreite').find(":selected").val();
        var querschnitt = $('#top_features_Querschnitt').find(":selected").val();
        var zoll = $('#top_features_Zoll').find(":selected").val();
        var price = $('#top_features_Price').find(":selected").val();

        if('default' !== saison){
            rawLink = rawLink.concat('&top_features_Saison=' + saison);
        }
        if('default' !== breite){
            rawLink = rawLink.concat('&top_features_Reifenbreite=' + breite);
        }
        if('default' !== querschnitt){
            rawLink = rawLink.concat('&top_features_Querschnitt=' + querschnitt);
        }
        if('default' !== zoll){
            rawLink = rawLink.concat('&top_features_Zoll=' + zoll);
        }
        if('default' !== price){
            if('premium' === price) {
                rawLink = rawLink.concat(
                    '&top_features_brandName=' +
                    'Bridgestone%7C' +
                    'Continental%7C' +
                    'Dunlop%7C' +
                    'Goodyear%7C' +
                    'Hankook%7C' +
                    'Michelin%7C' +
                    'Nokian%7C' +
                    'Pirelli'
                );
            } else if('quality' === price) {
                rawLink = rawLink.concat(
                    '&top_features_brandName=' +
                    'Apollo%7C' +
                    'Avon%7C' +
                    'Avon Vintage%7C' +
                    'Barum%7C' +
                    'BF Goodrich%7C' +
                    'BFGoodrich%7C' +
                    'Cooper%7C' +
                    'Debica%7C' +
                    'Falken%7C' +
                    'Federal%7C' +
                    'Firestone%7C' +
                    'Fulda%7C' +
                    'General%7C' +
                    'Gislaved%7C' +
                    'GT Radial%7C' +
                    'Kleber%7C' +
                    'Kumho%7C' +
                    'Maloya%7C' +
                    'Marshal%7C' +
                    'MARSHALL%7C' +
                    'Matador%7C' +
                    'Maxxis%7C' +
                    'Nankang%7C' +
                    'Nexen%7C' +
                    'Pneumant%7C' +
                    'Sava%7C' +
                    'Semperit%7C' +
                    'Toyo%7C' +
                    'Uniroyal%7C' +
                    'Viking%7C' +
                    'Vredestein%7C' +
                    'Yokohama'
                );
            } else if('budget' === price) {
                rawLink = rawLink.concat(
                    '&top_features_brandName=',
                    'Accelera%7C' +
                    'Achilles%7C' +
                    'Altenzo%7C' +
                    'Antares%7C' +
                    'APlus%7C' +
                    'Atlas%7C' +
                    'Atturo%7C' +
                    'AUSTONE%7C' +
                    'Autogrip%7C' +
                    'Blacklion%7C' +
                    'Boto%7C' +
                    'Briway%7C' +
                    'Camac%7C' +
                    'Coker%7C' +
                    'Cordiant%7C' +
                    'Dayton%7C' +
                    'Deestone%7C' +
                    'Delinte%7C' +
                    'Double Star%7C' +
                    'Duraturn%7C' +
                    'Duro%7C' +
                    'Durun%7C' +
                    'Effiplus%7C' +
                    'Event%7C' +
                    'Evergreen%7C' +
                    'Excelsior%7C' +
                    'Fortuna%7C' +
                    'Fullrun%7C' +
                    'Goform%7C' +
                    'Goodride%7C' +
                    'Gremax%7C' +
                    'Gripmax%7C' +
                    'Habilead%7C' +
                    'Haida%7C' +
                    'Headway%7C' +
                    'Heidenau%7C' +
                    'HI FLY%7C' +
                    'Hilo%7C' +
                    'Horizon%7C' +
                    'IMPERIAL%7C' +
                    'Infinity%7C' +
                    'Insa Turbo%7C' +
                    'Interstate%7C' +
                    'Jinyu%7C' +
                    'Joyroad%7C' +
                    'Kama%7C' +
                    'Kapsen%7C' +
                    'Kelly%7C' +
                    'Kenda%7C' +
                    'Keter%7C' +
                    'Kinforest%7C' +
                    'King Meiler%7C' +
                    'Kormoran%7C' +
                    'Kraftwerk%7C' +
                    'Landsail%7C' +
                    'Lanvigator%7C' +
                    'Lassa%7C' +
                    'Laufenn%7C' +
                    'Lexani%7C' +
                    'Linglong%7C' +
                    'Malatesta%7C' +
                    'Marix%7C' +
                    'Master%7C' +
                    'Mastersteel%7C' +
                    'Maxtrek%7C' +
                    'Mazzini%7C' +
                    'Mentor%7C' +
                    'Meteor%7C' +
                    'Michelin Collection%7C' +
                    'Mickey Thompson%7C' +
                    'Minerva%7C' +
                    'Nitto%7C' +
                    'Nortenha%7C' +
                    'Ovation%7C' +
                    'Pace%7C' +
                    'Petlas%7C' +
                    'Phoenix%7C' +
                    'PowerTrac%7C' +
                    'Premada%7C' +
                    'Premiorri%7C' +
                    'Primewell%7C' +
                    'Profil%7C' +
                    'Radar%7C' +
                    'Radburg%7C' +
                    'RAPID%7C' +
                    'Recip%7C' +
                    'Retro%7C' +
                    'Riken%7C' +
                    'Roadstone%7C' +
                    'Rosava%7C' +
                    'Rotalla%7C' +
                    'Rovelo%7C' +
                    'Runway%7C' +
                    'Sailun%7C' +
                    'Security%7C' +
                    'Seiberling%7C' +
                    'Silverstone%7C' +
                    'Sonar%7C' +
                    'Star Performer%7C' +
                    'Starco%7C' +
                    'Starmaxx%7C' +
                    'Sunfull%7C' +
                    'Sunitrac%7C' +
                    'Sunny%7C' +
                    'Superia%7C' +
                    'Syron%7C' +
                    'THREE-A%7C' +
                    'Tigar%7C' +
                    'Toledo%7C' +
                    'Torque%7C' +
                    'Tracmax%7C' +
                    'Tri-Ace%7C' +
                    'Triangle%7C' +
                    'Tristar%7C' +
                    'Vitour%7C' +
                    'Voltyre%7C' +
                    'Wanli%7C' +
                    'Waymaster%7C' +
                    'Westlake%7C' +
                    'Windforce%7C' +
                    'Winter Tact%7C' +
                    'Zeetex%7C' +
                    'Zeta'
                );
            }

        }

        window.location.href = rawLink;


    };


});



function appendOptions(selectListId, values){
    //Create and append select list
    var selectList = document.getElementById(selectListId);

    //Create and append the options
    for (var i = 0; i < values.length; i++) {
        var option = document.createElement("option");
        option.value = values[i];
        option.text = values[i];
        selectList.appendChild(option);
    }
}


function createOptionsByCSV(selectListId, file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                // $.csv.toArray(allText)
                appendOptions(selectListId, function (allText) {
                    alert();
                });
            }
        }
    }
    // rawFile.send(null);
}
