assert = chai.assert;

describe('Testing function which format dates for the next 5 days including today', function () {

    // testing for change password function

    it('Test 1: Checks the result for tomorrow', function () {
        // initialize the string for months and days of the weeks
        let monthsString = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        // gets information for today
        var today = new Date();
        var curYear = today.getFullYear();
        var curMon = today.getMonth();
        var curDay = today.getDate();
        var curDayOfTheWeek = today.getDay();
        var days = [];

        // gets information for tomorrow
        var tomorrow = new Date();

        // sets tomorrow to be one day away from today
        tomorrow.setDate(today.getDate() + 1);

        // gets infromation for tomorrow
        var tomorrow_DayofTheWeek = tomorrow.getDay();
        var tomorrow_Day = tomorrow.getDate();
        var tomorrow_Month = tomorrow.getMonth();
        var tomorrow_Year = tomorrow.getFullYear();

        // gets the formatted string for tomorrow
        var tomorrowFullDateString = dayOfWeek[tomorrow_DayofTheWeek] + ",  " + monthsString[tomorrow_Month] + " " + tomorrow_Day + ", " + tomorrow_Year;

        // function which find the date from today to the next 4 days and put them into an array
        for (i = 0; i < 5; i++) {
            days[i] = dayOfWeek[curDayOfTheWeek] + ",  " + monthsString[curMon] + " " + curDay + ", " + curYear;
            days[i].trim();
            curDay++;
            curDayOfTheWeek++;

            if (curDayOfTheWeek == 7) {
                curDayOfTheWeek = 0;
            }

            if ((curMon == 0 || curMon == 2 || curMon == 4 || curMon == 6 || curMon == 7 || curMon == 9 || curMon == 11) && curDay == 32) {
                curDay = 1;
                curMon++;
                if (curMon == 12) {
                    curMon = 0;
                    curYear++;
                }
            }
            else if ((curMon == 3 || curMon == 5 || curMon == 8 || curMon == 10) && curDay == 31) {
                curDay = 1;
                curMon++;

            }
            else if ((curMon == 1) && curDay == 29 && (curYear % 4 != 0)) {
                curDay = 1;
                curMon++;
            }
            else if ((curMon == 1) && curDay == 30 && (curYear % 4 == 0)) {
                curDay = 1;
                curMon++;

            }
        }
        // checks to see if the function is correct
        assert.equal(days[1], tomorrowFullDateString)
    });


    it('Test 2: Check the result for the next next day', function () {

        // initialize the string for months and days of the weeks
        let monthsString = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        // gets information for today
        const today = new Date();
        var curYear = today.getFullYear();
        var curMon = today.getMonth();
        var curDay = today.getDate();
        var curDayOfTheWeek = today.getDay();
        var days = [];

        // gets information for tomorrow
        var tomorrow = new Date();

        // sets tomorrow to be one day away from today
        tomorrow.setDate(today.getDate() + 2);

        // gets infromation for tomorrow
        var tomorrow_DayofTheWeek = tomorrow.getDay();
        var tomorrow_Day = tomorrow.getDate();
        var tomorrow_Month = tomorrow.getMonth();
        var tomorrow_Year = tomorrow.getFullYear();

        // gets the formatted string for tomorrow
        var tomorrowFullDateString = dayOfWeek[tomorrow_DayofTheWeek] + ",  " + monthsString[tomorrow_Month] + " " + tomorrow_Day + ", " + tomorrow_Year;

        // function which find the date from today to the next 4 days and put them into an array
        for (i = 0; i < 5; i++) {
            days[i] = dayOfWeek[curDayOfTheWeek] + ",  " + monthsString[curMon] + " " + curDay + ", " + curYear;
            days[i].trim();
            curDay++;
            curDayOfTheWeek++;

            if (curDayOfTheWeek == 7) {
                curDayOfTheWeek = 0;
            }

            if ((curMon == 0 || curMon == 2 || curMon == 4 || curMon == 6 || curMon == 7 || curMon == 9 || curMon == 11) && curDay == 32) {
                curDay = 1;
                curMon++;
                if (curMon == 12) {
                    curMon = 0;

                    curYear++;
                }
            }
            else if ((curMon == 3 || curMon == 5 || curMon == 8 || curMon == 10) && curDay == 31) {
                curDay = 1;
                curMon++;

            }
            else if ((curMon == 1) && curDay == 29 && (curYear % 4 != 0)) {
                curDay = 1;
                curMon++;
            }
            else if ((curMon == 1) && curDay == 30 && (curYear % 4 == 0)) {
                curDay = 1;
                curMon++;

            }
        }

        // checks to see if the function is correct
        assert.equal(days[2], tomorrowFullDateString)
    });

    it('Test 3: Check the result for the fifth day', function () {

        // initialize the string for months and days of the weeks
        let monthsString = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        // gets information for today
        const today = new Date();
        var curYear = today.getFullYear();
        var curMon = today.getMonth();
        var curDay = today.getDate();
        var curDayOfTheWeek = today.getDay();
        var days = [];

        // gets information for tomorrow
        var tomorrow = new Date();

        // sets tomorrow to be one day away from today
        tomorrow.setDate(today.getDate() + 4);

        // gets infromation for tomorrow
        var tomorrow_DayofTheWeek = tomorrow.getDay();
        var tomorrow_Day = tomorrow.getDate();
        var tomorrow_Month = tomorrow.getMonth();
        var tomorrow_Year = tomorrow.getFullYear();

        // gets the formatted string for tomorrow
        var tomorrowFullDateString = dayOfWeek[tomorrow_DayofTheWeek] + ",  " + monthsString[tomorrow_Month] + " " + tomorrow_Day + ", " + tomorrow_Year;

        // function which find the date from today to the next 4 days and put them into an array
        for (i = 0; i < 5; i++) {
            days[i] = dayOfWeek[curDayOfTheWeek] + ",  " + monthsString[curMon] + " " + curDay + ", " + curYear;
            days[i].trim();
            curDay++;
            curDayOfTheWeek++;

            if (curDayOfTheWeek == 7) {
                curDayOfTheWeek = 0;
            }

            if ((curMon == 0 || curMon == 2 || curMon == 4 || curMon == 6 || curMon == 7 || curMon == 9 || curMon == 11) && curDay == 32) {
                curDay = 1;
                curMon++;
                if (curMon == 12) {
                    curMon = 0;

                    curYear++;
                }
            }
            else if ((curMon == 3 || curMon == 5 || curMon == 8 || curMon == 10) && curDay == 31) {
                curDay = 1;
                curMon++;

            }
            else if ((curMon == 1) && curDay == 29 && (curYear % 4 != 0)) {
                curDay = 1;
                curMon++;
            }
            else if ((curMon == 1) && curDay == 30 && (curYear % 4 == 0)) {
                curDay = 1;
                curMon++;

            }
        }
        // checks to see if the function is correct
        assert.equal(days[4], tomorrowFullDateString)
    });

});
