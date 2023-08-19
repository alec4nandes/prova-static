var wpformsDispatchEvent = function (el, ev, custom) {
    var e = document.createEvent(custom ? "CustomEvent" : "HTMLEvents");
    custom
        ? e.initCustomEvent(ev, true, true, false)
        : e.initEvent(ev, true, true);
    el.dispatchEvent(e);
};
var wpformsRecaptchaV3Execute = function (callback) {
    grecaptcha
        .execute("6LfYOs4gAAAAAEEHGXqjQ3ta0BuqLlUOqHml4jbU", {
            action: "wpforms",
        })
        .then(function (token) {
            Array.prototype.forEach.call(
                document.getElementsByName("wpforms[recaptcha]"),
                function (el) {
                    el.value = token;
                }
            );
            if (typeof callback === "function") {
                return callback();
            }
        });
};
grecaptcha.ready(function () {
    wpformsDispatchEvent(document, "wpformsRecaptchaLoaded", true);
});

/* <![CDATA[ */
var wpforms_settings = {
    val_required: "This field is required.",
    val_email: "Please enter a valid email address.",
    val_email_suggestion: "Did you mean {suggestion}?",
    val_email_suggestion_title: "Click to accept this suggestion.",
    val_email_restricted: "This email address is not allowed.",
    val_number: "Please enter a valid number.",
    val_number_positive: "Please enter a valid positive number.",
    val_confirm: "Field values do not match.",
    val_checklimit: "You have exceeded the number of allowed selections: {#}.",
    val_limit_characters: "{count} of {limit} max characters.",
    val_limit_words: "{count} of {limit} max words.",
    val_recaptcha_fail_msg:
        "Google reCAPTCHA verification failed, please try again later.",
    val_inputmask_incomplete: "Please fill out the field in required format.",
    uuid_cookie: "",
    locale: "en",
    wpforms_plugin_url:
        "https://provalabsocialinnovation.com/wp-content/plugins/wpforms-lite/",
    gdpr: "",
    ajaxurl: "https://provalabsocialinnovation.com/wp-admin/admin-ajax.php",
    mailcheck_enabled: "1",
    mailcheck_domains: [],
    mailcheck_toplevel_domains: ["dev"],
    is_ssl: "1",
    page_title: "Home",
    page_id: "2",
};
/* ]]> */

_stq = window._stq || [];
_stq.push([
    "view",
    {
        v: "ext",
        j: "1:11.4.1",
        blog: "208051224",
        post: "2",
        tz: "0",
        srv: "provalabsocialinnovation.com",
    },
]);
_stq.push(["clickTrackerInit", "208051224", "2"]);
