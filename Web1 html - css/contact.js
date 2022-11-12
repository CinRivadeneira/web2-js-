const $form = document.querySelector(".form");
const $buttonMailto = document.querySelector("#mailto");


$form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get("nombre"))
    $buttonMailto.setAttribute("href", "mailto:tucweb2022@gmail.com?subject")
    $buttonMailto.click()

}