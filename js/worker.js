'use strict';

$(document).ready(function () {
        var worker = {};

        var saveEl = $('#save');

        var nameEl = $('#name');
        var firstnameEl = $('#firstname');
        var emailEl = $('#email');
        var phoneEl = $('#phone');
        var postcodeEl = $('#postcode');
        var companyEl = $('#company');
        var submitOk = $('#submit-ok');
        var submitKo = $('#submit-ko');

        function isFormValid() {
            var name = nameEl.val();
            if (name.length > 0) {
                worker.last_name = name;
            } else {
                return false;
            }
            var firstname = firstnameEl.val();
            if (firstname.length > 0) {
                worker.first_name = firstname;
            } else {
                return false;
            }
            var email = emailEl.val();
            if (email.length > 0) {
                worker.email = email;
            } else {
                return false;
            }
            var company = companyEl.val();
            if (company.length > 0) {
                worker.company_name = company;
            } else {
                return false;
            }
            var phone = phoneEl.val();
            worker.phone = phone || '';
            var postcode = postcodeEl.val();
            worker.post_code = postcode || '';

            return true;
        }

        saveEl.click(function (ev) {
            ev.preventDefault();
            if (isFormValid()) {
                if (isFormValid()) {
                    $.post('http://178.62.139.175:8000/workers', worker, function () {
                        submitOk.fadeIn();
                        submitKo.hide();
                        setTimeout(function () {
                            submitOk.fadeOut();
                        }, 3000);
                        ga('send', 'event', 'subscription', 'worker');
                    }).fail(function () {
                        submitKo.fadeIn();
                        setTimeout(function () {
                            submitKo.fadeOut();
                        }, 3000);
                        submitOk.hide();
                    });
                }
            }
        });
    }
);