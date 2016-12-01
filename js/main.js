(function() {
    var data = [{
        name: "Tyrion Lannister",
        birthday: "12/02/1979",
    }, {
        name: "Cersei Lannister",
        birthday: "11/30/1975"
    }, {
        name: "Daenerys Targaryen",
        birthday: "11/24/1991"
    }, {
        name: "Arya Stark",
        birthday: "11/25/1996"
    }, {
        name: "Jon Snow",
        birthday: "12/03/1989"
    }, {
        name: "Sansa Stark",
        birthday: "15/08/1992"
    }, {
        name: "Jorah Mormont",
        birthday: "12/16/1968"
    }, {
        name: "Jaime Lannister",
        birthday: "12/06/1975"
    }, {
        name: "Sandor Clegane",
        birthday: "11/07/1969"
    }, {
        name: "Tywin Lannister",
        birthday: "10/12/1951"
    }, {
        name: "Theon Greyjoy",
        birthday: "12/31/1989"
    }, {
        name: "Samwell Tarly",
        birthday: "12/07/1990"
    }, {
        name: "Joffrey Baratheon",
        birthday: "06/12/1992"
    }, {
        name: "Catelyn Stark",
        birthday: "12/03/1962"
    }, {
        name: "Bran Stark",
        birthday: "12/02/1995"
    }, {
        name: "Petyr Baelish",
        birthday: "11/20/1974"
    }, {
        name: "Robb Stark",
        birthday: "11/28/1986"
    }, {
        name: "Brienne of Tarth",
        birthday: "11/27/1985"
    }, {
        name: "Margaery Tyrell",
        birthday: "12/02/1989"
    }, {
        name: "Stannis Baratheon",
        birthday: "09/14/1971"
    }, {
        name: "Davos Seaworth",
        birthday: "02/13/1973"
    }, {
        name: "Tormund Giantsbane",
        birthday: "12/14/1974"
    }, {
        name: "Jeor Mormont",
        birthday: "11/01/1955"
    }, {
        name: "Eddard Stark",
        birthday: "12/02/1963"
    }, {
        name: "Khal Drogo",
        birthday: "12/05/1980"
    }, {
        name: "Ramsay Bolton",
        birthday: "12/05/1976"
    }, {
        name: "Robert Baratheon",
        birthday: "12/02/1965"
    }, {
        name: "Daario Naharis",
        birthday: "12/02/1985"
    }, {
        name: "Viserys Targaryen",
        birthday: "12/06/1984"
    }];

    var daysArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function JSONStringyType(sourceData) {
        // define a function for global indentation on entire site 
        return JSON.stringify(sourceData, null, 2);
    }

    document.getElementById('calenderData').value = JSONStringyType(data);

    var defaultYear = document.getElementById('yearInput').value;

    function getInputData() {
        var inputVals = document.getElementById('calenderData').value;
        return JSON.parse(inputVals);
    }

    function getGivenYear() {
        var year = document.getElementById('yearInput').value;
        if (year.length == 4) {
            return year;
        } else {
            alert("Given Year is not correct");
            return false;
        }


    }

    function calculateRealDays() {
        var inputData = getInputData();
        var refInputData = [];
        var inputYear = getGivenYear();
        if (inputYear) {
            for (var i = 0; i < inputData.length; i++) {
                var orgDate =  new Date(inputData[i].birthday);
                var givenYear = inputData[i].birthday.substring(0, inputData[i].birthday.length - 4) + inputYear;
                var d = new Date(givenYear);
                var n = d.getDay();
                if (isNaN(n)) alert("Please Follow the format mm-dd-yyyy Data looks messy at \n\nname:" + inputData[i].name + "\n\nbirthday date: " + inputData[i].birthday + "\n\n");
                var timeDiff = Math.abs(d.getTime() - orgDate.getTime());
                var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                inputData[i].day = n;
                inputData[i].age = diffDays;
                refInputData.push(inputData[i]);
            }
            return refInputData;
        }
    }

    function parseBirthdays() {
        var allDays = calculateRealDays();
        var allDaysJson = [];
        for (var i = 0; i < allDays.length; i++) {
            if (allDaysJson[allDays[i].day]) {
                allDaysJson[allDays[i].day].push(allDays[i])
            } else {
                allDaysJson[allDays[i].day] = [];
                allDaysJson[allDays[i].day].push(allDays[i])
            }
        }
        return allDaysJson;
    }

    function getDayHTML(day) {
        var startHTML = '<div class="col-md-1"> <div class="panel panel-info"><div class="panel-heading text-right">' + daysArray[day] + '</div> <div class="panel-body"> <ul class="rm-mar-pad list-inline node-list">';
        var endHTML = '</ul> </div> </div> </div>';
        return {
            start: startHTML,
            end: endHTML
        }
    }

    function getBdayBlockHTML(allnodes) {
        var html = '';
        allnodes.sort(function(a, b) {
            return a.age - b.age;
        });
        var count = allnodes.length;
        var className = "matrix-";
        className += Math.ceil(Math.sqrt(count));
        for (var i = 0; i < count; i++) {

            var matches = allnodes[i].name.match(/\b(\w)/g);
            var acronym = matches.join('');
            html += '<li class="' + className + '"><span class="acronym"> ' + acronym + '</span></li>';
        }
        return html;
    }

    function initBirthdays() {
        var allDays = parseBirthdays();
        var html = '';
        for (var i = 0; i < 7; i++) {
            var dayHTML = getDayHTML(i);
            for (var j = 0; j < allDays[i].length; j++) {
                var birthdayBlocks = getBdayBlockHTML(allDays[i]);
            }

            html += dayHTML.start + birthdayBlocks + dayHTML.end;
        }
        document.getElementById('birthday-block').innerHTML = html;
    }

    document.getElementById("updateYear").addEventListener("click", initBirthdays);
    initBirthdays()
})();
