assert = chai.assert;

describe('Testing function which changes password by comparing the given username with the username in the storage. And then change the password to push to the storage', function () {

    // testing for change password function

    it('Test 1: If the given username is the same with the stored one and the password match (Position in the array is 1)', function () {

        // given username
        const uname1 = "BobMichael";

        // initialize initial storage arrays
        var savedUsers = ["abc", "BobMichael", "xyz"];
        var savedPass = ["123", "456", "789"];
        window.localStorage.setItem('usernames', JSON.stringify(savedUsers))
        window.localStorage.setItem('passwords', JSON.stringify(savedPass))

        // gets the information from the storage
        savedPass = window.localStorage.getItem('passwords');
        savedUsers = window.localStorage.getItem('usernames');

        var parsedPass = JSON.parse(savedPass);
        var parsedUsers = JSON.parse(savedUsers);

        // find the index of the given username in the array
        var k = parsedUsers.indexOf(uname1);
        var newPass = "1012";
        var newPassConfirm = "1012";

        // if the passwords match, change the password in the array and push to the storage
        if (newPass == newPassConfirm) {
            parsedPass[k] = newPass;
            window.localStorage.setItem("passwords", JSON.stringify(parsedPass));
        } else {
            // if the passwords do not match, alert error
            alert("New passwords do not match.")
        }

        // checks to see if the password is changed
        var changedPass = JSON.parse(window.localStorage.getItem('passwords'));
        assert.equal(changedPass[1], "1012");
    });

    it('Test 2: If the given username is the same with the stored one and the password do not match (password wont change)', function () {

        // given username
        const uname1 = "BobMichael";

        // initialize initial storage arrays
        var savedUsers = ["abc", "BobMichael", "xyz"];
        var savedPass = ["123", "456", "789"];
        window.localStorage.setItem('usernames', JSON.stringify(savedUsers))
        window.localStorage.setItem('passwords', JSON.stringify(savedPass))

        // gets the information from the storage
        savedPass = window.localStorage.getItem('passwords');
        savedUsers = window.localStorage.getItem('usernames');

        var parsedPass = JSON.parse(savedPass);
        var parsedUsers = JSON.parse(savedUsers);

        // find the index of the given username in the array
        var k = parsedUsers.indexOf(uname1);
        var newPass = "1012";
        var newPassConfirm = "2000";

        // if the passwords match, change the password in the array and push to the storage
        if (newPass == newPassConfirm) {
            parsedPass[k] = newPass;
            window.localStorage.setItem("passwords", JSON.stringify(parsedPass));
        } else {
            // if the passwords do not match, alert error. Skips the error alert in this part because it stops the test from running.
        }

        // checks to see if the password is changed
        var changedPass = JSON.parse(window.localStorage.getItem('passwords'));
        assert.equal(changedPass[1], "456");
    });
    
    it('Test 3: If the given username is the same with the stored one and the password match (Position in the array is 2)', function () {

        // given username
        const uname1 = "xyz";

        // initialize initial storage arrays
        var savedUsers = ["abc", "BobMichael", "xyz"];
        var savedPass = ["123", "456", "789"];
        window.localStorage.setItem('usernames', JSON.stringify(savedUsers))
        window.localStorage.setItem('passwords', JSON.stringify(savedPass))

        // gets the information from the storage
        savedPass = window.localStorage.getItem('passwords');
        savedUsers = window.localStorage.getItem('usernames');

        var parsedPass = JSON.parse(savedPass);
        var parsedUsers = JSON.parse(savedUsers);

        // find the index of the given username in the array
        var k = parsedUsers.indexOf(uname1);
        var newPass = "1012";
        var newPassConfirm = "1012";

        // if the passwords match, change the password in the array and push to the storage
        if (newPass == newPassConfirm) {
            parsedPass[k] = newPass;
            window.localStorage.setItem("passwords", JSON.stringify(parsedPass));
        } else {
            // if the passwords do not match, alert error
            alert("New passwords do not match.")
        }

        // checks to see if the password is changed
        var changedPass = JSON.parse(window.localStorage.getItem('passwords'));
        assert.equal(changedPass[2], "1012");
    });

});