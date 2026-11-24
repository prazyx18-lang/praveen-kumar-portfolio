/* ==========================================================================
   Project enquiry form
   - Checks the required fields and shows a message next to each problem.
   - When the form is valid, opens WhatsApp with the enquiry already typed.
   - This website does not store or send the enquiry itself. The person must
     press Send inside WhatsApp, so the page never claims it was delivered.
   ========================================================================== */

(function () {
  "use strict";

  var WHATSAPP_NUMBER = "918778036215"; // +91 87780 36215 (country code, no +)
  var form = document.getElementById("enquiry-form");
  if (!form) return;

  var status = document.getElementById("enq-status");
  var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var fields = {
    name: { input: document.getElementById("enq-name"), error: document.getElementById("enq-name-err"),
      check: function (v) { return v.length === 0 ? "Please enter your name." : ""; } },
    email: { input: document.getElementById("enq-email"), error: document.getElementById("enq-email-err"),
      check: function (v) {
        if (v.length === 0) return "Please enter your email address.";
        if (!EMAIL_PATTERN.test(v)) return "Please enter a valid email address, for example name@example.com.";
        return "";
      } },
    projectType: { input: document.getElementById("enq-type"), error: document.getElementById("enq-type-err"),
      check: function (v) { return v === "" ? "Please choose a project type." : ""; } },
    description: { input: document.getElementById("enq-desc"), error: document.getElementById("enq-desc-err"),
      check: function (v) {
        if (v.length === 0) return "Please describe your project.";
        if (v.length < 10) return "Please add a little more detail (at least 10 characters).";
        return "";
      } }
  };

  function setError(key, message) {
    var f = fields[key];
    f.error.textContent = message;
    if (message) {
      f.input.setAttribute("aria-invalid", "true");
    } else {
      f.input.removeAttribute("aria-invalid");
    }
  }

  function readValues() {
    return {
      name: fields.name.input.value.trim(),
      email: fields.email.input.value.trim(),
      projectType: fields.projectType.input.value,
      description: fields.description.input.value.trim()
    };
  }

  // Clear each message as soon as the person corrects that field.
  Object.keys(fields).forEach(function (key) {
    var evt = fields[key].input.tagName === "SELECT" ? "change" : "input";
    fields[key].input.addEventListener(evt, function () {
      if (fields[key].error.textContent) {
        setError(key, fields[key].check(fields[key].input.value.trim()));
      }
    });
  });

  function buildMessage(values) {
    return [
      "Hello Praveen, I would like to enquire about a project.",
      "",
      "Name: " + values.name,
      "Email: " + values.email,
      "Project type: " + values.projectType,
      "",
      "Project description:",
      values.description
    ].join("\n");
  }

  function setStatus(html) {
    // Only ever receives fixed markup built below, never user input.
    status.innerHTML = html;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var values = readValues();
    var firstInvalid = null;

    Object.keys(fields).forEach(function (key) {
      var message = fields[key].check(key === "name" || key === "email" || key === "description"
        ? values[key] : values.projectType);
      setError(key, message);
      if (message && !firstInvalid) firstInvalid = fields[key].input;
    });

    if (firstInvalid) {
      setStatus("");
      firstInvalid.focus();
      return;
    }

    var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(buildMessage(values));
    var opened = window.open(url, "_blank");

    if (opened) {
      try { opened.opener = null; } catch (e) { /* some browsers block this; harmless */ }
      setStatus("WhatsApp has opened with your enquiry ready. Press <strong>Send</strong> in WhatsApp to deliver it.");
    } else {
      // Pop-up blocked: give the person a direct link instead.
      setStatus("Your browser blocked the new window. " +
        '<a href="' + url.replace(/"/g, "&quot;") + '" target="_blank" rel="noopener noreferrer">Open WhatsApp with your enquiry</a>.');
    }
  });
})();
