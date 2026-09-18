const contactForm = document.querySelector(".contact-form");
const contactButton = document.querySelector(".contact-button");

if (contactForm && contactButton) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Pesan portfolio dari ${name}`);
    const body = encodeURIComponent(
      `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
    );

    contactButton.textContent = "Membuka Email...";
    contactForm.reset();
    window.location.href = `mailto:imam01102008@gmail.com?subject=${subject}&body=${body}`;
  });
}
