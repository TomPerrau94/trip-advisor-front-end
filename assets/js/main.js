const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("Document loaded");

  const modal = $.getElementById("sign-up-modal");

  const button = $.getElementById("sign-up-button");

  const closeButton = $.getElementById("sign-up-modal-close");

  const form = $.getElementById("sign-up-form");

  const returnButton = $.getElementById("return-to-website");

  const signupSuccess = $.getElementById("sign-up-success");

  // const signupError = $.getElementById("sign-up-error");

  button.onclick = function () {
    modal.style.display = "flex";
    $.body.style.overflow = "hidden";
  };

  closeButton.onclick = function () {
    modal.style.display = "none";
    $.body.style.overflow = null;
  };

  returnButton.onclick = function () {
    modal.style.display = "none";
    $.body.style.overflow = null;
    $.location.reload(true);
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  $.querySelector("#sign-up-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = {
      firstname: $.querySelector("#firstname").value,
      lastname: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      password: $.querySelector("#password").value,
      description: $.querySelector("#description").value,
    };

    // console.log(data);
    const response = await axios.post(
      "https://trip-advisor-back-end-tom.herokuapp.com/sign-up",
      data
    );
    // console.log(response);

    if (response.request.status === 200) {
      form.style.display = "none";
      signupSuccess.style.display = "flex";
    }
    // else {
    //   form.style.display = "none";
    //   signupError.style.display = "flex";
    // }
  });
});
