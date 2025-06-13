export const contactConfirmation = {
  heading: 'Thank you for reaching out, {name}!',
  headingFallback: 'Thank you for reaching out!',
  message:
    'I look forward to hearing what you have to say and I will get back to you as soon as possible.',
};

export const contactForm = {
  heading: 'Contact Form',
  name: {
    label: 'Full Name',
    placeholder: 'Full Name',
    errorRequired: 'Full Name is required',
  },
  email: {
    label: 'Email Address',
    placeholder: 'example@domain.com',
    errorRequired: 'Email Address is required',
    errorPatterm: 'Invalid Email Address',
  },
  loadingMessage: 'Submitting Contact Form....',
  message: {
    label: 'Message',
    placeholder: 'Type your message',
    errorRequired: 'Message is required',
  },
  serverError:
    'There was an issue submitting your message. Please try again later.',
  submit: {
    label: 'Submit',
  },
};

export const meta = {
  title: 'Contact',
  description: 'Contact Adam Mornes, a web developer based in Flint, MI.',
};
