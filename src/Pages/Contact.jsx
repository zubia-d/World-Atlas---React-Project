export const Contact = () => {
  const handleFormSubmit = (formData) => {   // formData = api of react 19
    console.log(formData.entries()); // method that converts an iterable of pair of key-value pairs from the form data
    const formInputData = Object.fromEntries(formData.entries()); // this will pass this on object
    console.log(formInputData);
  };
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="enter your name"
            name="username"
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="enter your email"
            required
            autoComplete="off"
          />
          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          ></textarea>

          <button type="submit" value="send">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
